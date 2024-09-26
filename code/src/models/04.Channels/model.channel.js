function Channel () {

  let messages = []
  let agents   = []

  function send (message) {
    let [agent, ...nexts] = agents
    if (agent) {
      agents = nexts
      agent (message)
    }
    else messages = [...messages, message]
  }

  function receive () {
    return new Promise (function (agent) {
      let [message, ...nexts] = messages
      if (message) {
        messages = nexts
        agent (message)
      }
      else agents = [...agents, agent]
    })
  }

  return {
    send,
    receive
  }

}

export default Channel