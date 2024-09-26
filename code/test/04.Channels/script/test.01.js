import Channel  from '../../../src/models/04.Channels/model.channel.js'
import Agent    from '../../../src/models/04.Channels/agent.channel.js'

let C = Channel ()

let SX = Agent ('SX')
let RX = Agent ('RY')

SX.bind (C)
RX.bind (C)

SX.Sender   ()
RX.Receiver ()
