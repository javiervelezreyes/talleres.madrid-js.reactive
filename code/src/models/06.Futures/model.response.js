function Response (fn) {

  let Agent 
  let Value 

  function bind (agent) {
    Agent = agent
    Value && agent.execute (Value)
  }

  fn (function (value) {
    Value = value
    Agent && Agent.execute (value)
  })

  return { bind }

}

export default Response