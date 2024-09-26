import  Tasks from './model.tasks.js'
import Helper from './helper.extend.js'

function Stream () {

  let tasks = []
  let stream
  let self
  
  function bind (task) {
    tasks = [task, ...tasks]
    return self
  }

  function subscribe (agent) {
    bind (function (stream) {
      return function (value) {
        agent.execute (value)
        stream (value)
      }
    })
    return self
  }

  function send (value) {
    stream = stream || Helper.close (tasks)
    stream (value)
    return self
  }

  return Helper.extend (self = {
    bind,
    subscribe,
    send 
  }, Tasks)

}

export default Stream