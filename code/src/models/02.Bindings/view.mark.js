import Bindings from "./model.bindings.js"
import Helper   from "./helper.resolver.js"

const NONE = ''

function View (port, mark, exp) {

  function Model (model) {
    let helper   = Helper   (exp)
    let bindings = Bindings (model)
    bindings.bind ({
      refresh () {
        let text   = helper.resolve (model)
        let active = JSON.parse (text)
         active && port.setAttribute (mark, NONE)
        !active && port.removeAttribute (mark)
      }
    })
  }

  return { Model }

}

export default View