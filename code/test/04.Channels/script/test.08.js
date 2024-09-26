import Agent from '../../../src/models/04.Channels/agent.bus.js'

const TX = 'TX'
const TY = 'TY'

let SX = Agent ('SX')
let SY = Agent ('SY')
let RX = Agent ('RX')
let RY = Agent ('RY')

SX.Sender   (TX)
SY.Sender   (TY)
RX.Receiver (TX)
RY.Receiver (TY)