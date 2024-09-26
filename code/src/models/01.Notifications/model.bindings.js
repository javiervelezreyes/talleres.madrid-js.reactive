function Bindings () {

  let Agents = new Set ()
  let add    = Agents.add    .bind (Agents)
  let remove = Agents.delete .bind (Agents)

  function   bind (...agents) { agents.map (add)    }
  function unbind (...agents) { agents.map (remove) }
  function fire (ctx) {
    for (let agent of Agents) {
      agent.execute (ctx)
    }
  }

  return { 
    bind, 
    unbind, 
    fire 
  }

}

export default Bindings
