const KEYS     = 'getOwnPropertyNames'
const VALUES   = 'values'
const FUNCTION = 'function'

let Keys = Object[KEYS]
let isFunction  = x => typeof x == FUNCTION
let isMethod    = x => y =>  isFunction (x[y])
let isProperty  = x => y => !isFunction (x[y])

function Helper (core) {

  function keys () {
    return Keys (core).filter (isProperty (core))
  }

  function methods () {
    return Keys (core).filter (isMethod (core))
  }

  function values () {
    let values = []
    for (let key of keys ()) {
      values.push (core[key])
    }
    return values
  }

  return { 
    keys, 
    methods,
    values 
  }

}

export default Helper
