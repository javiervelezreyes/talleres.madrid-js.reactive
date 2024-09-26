import Signal  from '../../../src/models/03.Signals/model.signal.js'
import execute from '../../../src/helpers/helper.execute.js'
import Logger  from '../../../src/helpers/helper.logger.js'

const WX = Logger ('WX')
const WY = Logger ('WY')

let SX = Signal (0)
let SY = Signal (0)

let RX = SX.get ()
let RY = SY.get ()

WX.info (RX)
WY.info (RY)

execute (function (n) {
  SX.set (n)
  SY.set (n)
})