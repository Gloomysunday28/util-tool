import { debounce } from '../src/index'

const div: any = document.getElementsByClassName('btn')[0]
div.onclick = debounce(function() {
  console.log(32131)
}, 300, true)