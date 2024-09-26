import Model   from '../../../src/models/02.Bindings/model.model.js'
import View    from '../../../src/models/02.Bindings/view.class.js'
import Text    from '../../../src/models/02.Bindings/view.text.js'
import Port    from '../../../src/helpers/helper.port.js'
import execute from '../../../src/helpers/helper.execute.js'

const COLORS = ['red', 'yellow', 'green']
const TEXTS  = ['Stop', 'Ready', 'Go']
const NONE   = ''
const MAX    = 3

let PX = Port ('PX') 
let PY = Port ('PY') 

let VXA = View (PX, '{{state}}') 
let VYA = View (PY, '{{state}}') 
let VXB = Text (PX, '{{text}}') 
let VYB = Text (PY, '{{text}}') 

let SX = Model ({ state : NONE, text : NONE })
let SY = Model ({ state : NONE, text : NONE })

VXA.Model (SX)
VXB.Model (SX)
VYA.Model (SY)
VYB.Model (SY)

execute (function (n) {
  SX.state = COLORS [n-1]
  SX.text  = TEXTS  [n-1]
}, MAX)

execute (function (n) {
  SY.state = COLORS [n-1]
  SY.text  = TEXTS  [n-1]
}, MAX)