const N       = 5
const DELAY   = 500
const FROM    = '#action'
const TO      = '#actions'
const BUTTON  = 'button'
const CONTENT = 'content'
const EVENT   = 'click'
 
function Helper (fn, n, ms) {

  let from   = document.querySelector (FROM)
  let to     = document.querySelector (TO)
  let node   = from[CONTENT].cloneNode (true)
  let button = node.querySelector (BUTTON)
  button.addEventListener (EVENT, function () {
    let times = 0
    let max   = n  || N
    let delay = ms || DELAY
    let idx   = setInterval (function () {
       (times < max) && fn (times + 1)
      !(times < max) && clearInterval (idx)
        times++
    }, delay)
  })
  to.appendChild (node)
}

export default Helper
