import Signal  from '../../../src/models/03.Signals/model.signal.js'
import Watcher from '../../../src/models/03.Signals/model.watcher.js'
import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'

const WX = Logger ('WX')
const WY = Logger ('WY')
const WZ = Logger ('WZ')

let Inc = x => x + 1
let Dec = x => x - 1

let SX = Signal (0)
let SY = Signal (10)
let SZ = Signal (function () { 
  let RX = SX.get ()
  let RY = SY.get ()
  return RX * RY
})

Watcher (function () { WX.info ( SX.get () ) })
Watcher (function () { WY.info ( SY.get () ) })
Watcher (function () { WZ.info ( SZ.get () ) })

execute (function () {
  SX.update (Inc)
  SY.update (Dec)
})