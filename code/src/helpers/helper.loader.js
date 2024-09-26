const KEY     = 'key'
const PREFIX  = 'script/test.'
const SUFIX   = '.js'
const SCRIPT  = 'script'
const TYPE    = 'module'
const DEFAULT = '01'
const NAME    = '.test'


function Helper () {

  function getPath () {
    let search = window.location.search
    let keys   = new URLSearchParams (search)
    let key    = keys.get (KEY) || DEFAULT
    let path   = PREFIX + key + SUFIX
    return [path, key]
  }
  
  function load () {
    let [path, key] = getPath ()
    let script  = document.createElement (SCRIPT)
    let head    = document.querySelector (NAME)
    let text    = head.textContent
    script.src  = path
    script.type = TYPE
    document.head.appendChild (script)
    head.textContent = `${text} - Test ${key}`
  }

  load ()

}

export default Helper ()
