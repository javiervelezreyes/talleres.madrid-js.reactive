import FX      from '../../../src/models/01.Notifications/core.x.js'
import FY      from '../../../src/models/01.Notifications/core.y.js'
import OX      from '../../../src/models/01.Notifications/observer.x.js'
import OY      from '../../../src/models/01.Notifications/observer.y.js'
import Inspect from '../../../src/models/01.Notifications/model.inspect.js'
import execute from '../../../src/helpers/helper.execute.js'

let CX = FX (5)
let CY = FY (5)

let IX = Inspect (CX)
let IY = Inspect (CY)

IX.bind (OX, OY)
IY.bind (OX, OY)

execute (function () {
  CX.inc ()
})
execute (function () {
  CY.dec ()
})