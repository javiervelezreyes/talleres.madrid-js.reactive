import Model   from '../../../src/models/02.Bindings/model.model.js'
import View    from '../../../src/models/02.Bindings/view.text.js'
import Port    from '../../../src/helpers/helper.port.js'
import execute from '../../../src/helpers/helper.execute.js'


let PX = Port ('PX') 
let PY = Port ('PY') 

let VX = View (PX, '{{x+y}}') 
let VY = View (PY, '{{x*y}}')

let Core = Model ({
  x : 0,
  y : 0
})

VX.Model (Core)
VY.Model (Core)

execute (function (n) {
  Core.x = n
  Core.y = n
})