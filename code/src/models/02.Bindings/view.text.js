import Bindings from "./model.bindings.js"
import Helper   from "./helper.resolver.js"

const TEXT = 'textContent'

function View (port, exp) {

  function Model (model) {
    let helper   = Helper   (exp)
    let bindings = Bindings (model)
    bindings.bind ({
      refresh () {
        port[TEXT] = helper.resolve (model)
      }
    })
  }

  return { Model }

}

export default View