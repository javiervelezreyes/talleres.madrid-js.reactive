import Channel  from '../../../src/models/04.Channels/model.channel.js'
import Agent    from '../../../src/models/04.Channels/agent.channel.js'

let CX = Channel ()
let CY = Channel ()

let SX = Agent ('SX')
let SY = Agent ('SY')
let RX = Agent ('RX')
let RY = Agent ('RY')

SX.bind (CX)
SY.bind (CY)
RX.bind (CX)
RY.bind (CY)

SX.Sender   ()
SY.Sender   ()
RX.Receiver ()
RY.Receiver ()