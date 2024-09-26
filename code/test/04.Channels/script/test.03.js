import Channel  from '../../../src/models/04.Channels/model.channel.js'
import Agent    from '../../../src/models/04.Channels/agent.channel.js'

let C = Channel ()

let SX = Agent ('SX')
let RX = Agent ('RX')
let RY = Agent ('RY')

SX.bind (C)
RX.bind (C)
RY.bind (C)

SX.Sender   ()
RX.Receiver ()
RY.Receiver ()