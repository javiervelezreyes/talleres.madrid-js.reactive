import Bindings from "./model.bindings.js"
import Helper   from "./helper.resolver.js"

const CLASS = 'classList'

function View (port, exp) {
  
  function Model (model) {
    let helper   = Helper   (exp)
    let bindings = Bindings (model)
    bindings.bind ({
      refresh ({ before, after }) {
        let bClass = helper.resolve (before)
        let aClass = helper.resolve (after)
        bClass && port[CLASS].remove (bClass)
        aClass && port[CLASS].add    (aClass)
      }
    })
  }

  return { Model }

}

export default View