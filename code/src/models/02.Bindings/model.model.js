import Helper   from '../../helpers/helper.reflect.js'
import Bindings from './model.bindings.js'

function Model (data) {
  let ctx   = {}
  let model = {}
  let keys  = Helper (data).keys ()
  for (let key of keys) {
    ctx[key] = data[key]
    Reflect.defineProperty (model, key, {
      get ()  { return ctx[key] },
      set (x) { 
        let before = {...ctx}
        ctx[key]   = x
        let after  = {...ctx}
        Bindings (model).fire ({ before, after, key }) 
      },
    })
  }
  return model
}

export default Model