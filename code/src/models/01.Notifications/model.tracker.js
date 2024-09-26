import Helper  from '../../helpers/helper.reflect.js'
import Inspect from './model.inspect.js'

function Tracker () {

  function track (core) {
    let ctx  = {}
    let keys = Helper (core).keys ()
    for (let key of keys) {
      ctx[key] = core[key]
      Reflect.defineProperty (core, key, {
        get ()  { return ctx[key] },
        set (x) { 
          let before = {...ctx}
          ctx[key]   = x
          let after  = {...ctx}
          Inspect (core).fire ({ before, after, key }) 
        },
      })
    }
  }
  
  return { track }

}

export default Tracker ()