const FROM    = '#console'
const TO      = '#consoles'
const CONTENT = 'content'
const NAME    = '.name'
const TEXT    = '.text'

function Helper (key) {

  let from = document.querySelector (FROM)
  let to   = document.querySelector (TO)
  let node = from[CONTENT].cloneNode (true)
  let name = node.querySelector (NAME)
  let text = node.querySelector (TEXT)
  name.textContent = key
  to.appendChild (node)
  return text
}

export default Helper
