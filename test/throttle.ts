import { throttle } from '../src/index'

const div: any = document.getElementsByClassName('btn')[0]
div.onclick = throttle(function() {
  console.log(32131)
}, 1000)