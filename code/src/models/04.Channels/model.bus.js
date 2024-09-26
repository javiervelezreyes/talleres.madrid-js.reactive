function Bus () {

  let Agents = new Map ()

  function send (type, message) {
    let agents = Agents.get (type)
    for (let agent of agents) {
      agent.execute (message)
    }
  }

  function bind (type, agent) {
    let agents = Agents.get (type) || new Set ()
    agents.add (agent)
    Agents.set (type, agents)
  }

  function unbind (type, agent) {
    let agents = Agents.get (type)
    agents && agents.delete (agent)
    agents && Agents.set (type, agents)    
  }

  return {
    send,
    bind,
    unbind
  }

}

export default Bus ()