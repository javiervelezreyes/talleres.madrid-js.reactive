import Model   from '../../../src/models/02.Bindings/model.model.js'
import View    from '../../../src/models/02.Bindings/view.mark.js'
import Port    from '../../../src/helpers/helper.port.js'
import execute from '../../../src/helpers/helper.execute.js'

const MARK = 'active'
const MAX  = 9

let PX = Port ('PX') 
let PY = Port ('PY') 
let PZ = Port ('PZ') 

let VX = View (PX, MARK, '{{state}}') 
let VY = View (PY, MARK, '{{state}}') 
let VZ = View (PZ, MARK, '{{state}}') 

let LX = Model ({ state : false })
let LY = Model ({ state : false })
let LZ = Model ({ state : false })

VX.Model (LX)
VY.Model (LY)
VZ.Model (LZ)

execute (function (n) {
  LX.state = (n % 3 == 1)
  LY.state = (n % 3 == 2)
  LZ.state = (n % 3 == 0)
}, MAX)
