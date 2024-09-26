import Tracker from './model.tracker.js'
import Watcher from './model.watcher.js'

let isFunction = x => x && x.call && x.apply

function Signal (init) {

  let state = init

  function Create (fn) {
    if (isFunction (fn)) {
      let signal = Signal ()
      Watcher (function () {
        signal.update (fn)
      })
      return signal
    }
  }

  function get () {
    Tracker.track (this)
    return state
  }

  function set (value) {
    state = value
    Tracker.refresh (this)
  }

  function update (fn) {
    state = fn (state)
    Tracker.refresh (this)
  }

  return Create (init) || { get, set, update }

}

export default Signal