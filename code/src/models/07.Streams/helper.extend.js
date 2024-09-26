const END = _ => {}


function Helper () {
  
  function close (tasks) {
    return tasks.reduce (function (stream, task) {
      return task (stream) 
    }, END) 
  }
  
  function extend (self, tasks) {
    for (let task in tasks) {
      let key = task
      let fn  = tasks[key]
      self[key] = function (...args) {
        self.bind (fn (...args))
        return self
      }
    }
    return self
  }

  return { close, extend }
}

export default Helper ()
