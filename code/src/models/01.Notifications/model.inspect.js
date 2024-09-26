import Bindings from './model.bindings.js'
import Tracker  from './model.tracker.js'

let BINDINGS = Symbol.for ('Bindings')
let TRACKED  = Symbol.for ('Tracked')

function Inspect (core) {

  !core[TRACKED] && Tracker.track (core)
   core[TRACKED]  = TRACKED
   core[BINDINGS] = core[BINDINGS] || Bindings ()
   return core[BINDINGS]
   
}

export default Inspect