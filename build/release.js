const shell = require('shelljs');
const { exec } = shell;
const argv = process.argv[2] || 'patch'
const versions = ['major', 'minor', 'patch']

if (!versions.includes(argv)) {
  console.error('版本号错误!')
  process.exit(1)
}

exec(`npm version ${argv}`, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  exec('npm publish', (err) => {
    if (err) {
      console.log(err)
      const login = exec('npm login', (err) => {
        if (err) {
          console.log('err', err)
          return
        }
    
        console.log('login success~')
      })
    
      var inputArray = [
        'martincai' + '\n',
        'caijiadi2828' + '\n',
        '459953103@qq.com' + '\n',
      ]
    
      login.stdout.on('data', () => {
        var cmd = inputArray.shift();
        if (cmd) {
            shell.echo(cmd);
            login.stdin.write(cmd);
        } else {
            login.stdin.end();
        }
      })

      login.stdout.on('end', () => {
        exec('npm publish')
      })
    }

    console.log('发布成功!')
  })
})