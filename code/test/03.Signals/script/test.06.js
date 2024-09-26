import Signal  from '../../../src/models/03.Signals/model.signal.js'
import Watcher from '../../../src/models/03.Signals/model.watcher.js'
import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'

const WXY = Logger ('WXY')
const WYX = Logger ('WXY')

let SX = Signal (0)
let SY = Signal (0)

Watcher (function () { 
  let RX = SX.get ()
  let RY = SY.get ()
  WXY.info ( RX + RY ) 
})
Watcher (function () { 
  let RX = SX.get ()
  let RY = SY.get ()
  WYX.info ( RX * RY ) 
})

execute (function (n) {
  SX.set (n)
  SY.set (n)
})