function Tracker () {

  let store  = new Map ()
  let buffer = new Set ()

  function track (signal) {
    buffer.add (signal)
  }

  function bind (watcher) {
    buffer.clear ()
    watcher ()
    for (let signal of buffer) {
      let watchers = store.get (signal) || []
          watchers = [...watchers, watcher]
      store.set (signal, watchers)
    }
  }

  function refresh (signal) {
    let watchers = store.get (signal) || []
    for (let watcher of watchers) {
      watcher ()
    }
  }

  return { 
    track, 
    bind,
    refresh, 
  }

}

export default Tracker ()