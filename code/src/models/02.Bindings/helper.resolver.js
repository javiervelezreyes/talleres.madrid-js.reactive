import RHelper from "../../helpers/helper.reflect.js"

const BEGIN  = '{{'
const END    = '}}'
const PREFIX = '${'
const SUFFIX = '}'
const RETURN = 'return `'
const CLOSE  = '`'

function Helper (exp) {

  function resolve (model) {
    let helper = RHelper (model)
    let keys   = helper.keys   ()
    let values = helper.values ()
    let code   = exp
    code = code.replaceAll (BEGIN, PREFIX)
    code = code.replaceAll (END,   SUFFIX)
    code = RETURN + code + CLOSE
    return Function (...keys, code)(...values)
  }
  
  return { resolve }

}

export default Helper