import Model   from '../../../src/models/02.Bindings/model.model.js'
import View    from '../../../src/models/02.Bindings/view.mark.js'
import Port    from '../../../src/helpers/helper.port.js'
import execute from '../../../src/helpers/helper.execute.js'

const MARK = 'active'
const MAX  = 10

let PX = Port ('PX') 
let PY = Port ('PY') 

let VX = View (PX, MARK, '{{state}}') 
let VY = View (PY, MARK, '{{state}}') 

let LX = Model ({ state : false })
let LY = Model ({ state : false })

VX.Model (LX)
VY.Model (LY)

execute (function (n) {
  LX.state = !!(n % 2)
  LY.state =  !(n % 2)
}, MAX)
