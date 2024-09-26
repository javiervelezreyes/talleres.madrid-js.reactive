import Model   from '../../../src/models/02.Bindings/model.model.js'
import View    from '../../../src/models/02.Bindings/view.class.js'
import Port    from '../../../src/helpers/helper.port.js'
import execute from '../../../src/helpers/helper.execute.js'

const COLORS = ['red', 'yellow', 'green']
const NONE   = ''
const MAX    = 3

let PX = Port ('PX') 
let PY = Port ('PY') 

let VX = View (PX, '{{X}}') 
let VY = View (PY, '{{Y}}') 

let Semaphores = Model ({
  X : NONE,
  Y : NONE,
})

VX.Model (Semaphores)
VY.Model (Semaphores)

execute (function (n) {
  Semaphores.X = COLORS [n-1]
  Semaphores.Y = COLORS [n-1]
}, MAX)