import Channel  from '../../../src/models/04.Channels/model.channel.js'
import Agent    from '../../../src/models/04.Channels/agent.channel.js'

let C = Channel ()

let SX = Agent ('SX')
let SY = Agent ('SY')
let RX = Agent ('RX')

SX.bind (C)
SY.bind (C)
RX.bind (C)

SX.Sender   ()
SY.Sender   ()
RX.Receiver (10)