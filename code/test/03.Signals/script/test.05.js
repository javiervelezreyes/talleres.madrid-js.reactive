import Signal  from '../../../src/models/03.Signals/model.signal.js'
import Watcher from '../../../src/models/03.Signals/model.watcher.js'
import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'

const WX  = Logger ('WX')
const WY  = Logger ('WY')
const WXY = Logger ('WXY')

let SX = Signal (0)
let SY = Signal (0)

Watcher (function () { WX.info ( SX.get () ) })
Watcher (function () { WY.info ( SY.get () ) })
Watcher (function () { 
  let RX = SX.get ()
  let RY = SY.get ()
  WXY.info ( RX + RY ) 
})

execute (function (n) {
  SX.set (n)
  SY.set (n)
})