import Agent from '../../../src/models/04.Channels/agent.bus.js'

const TX = 'TX'

let SX = Agent ('SX')
let RX = Agent ('RX')
let RY = Agent ('RY')

SX.Sender   (TX)
RX.Receiver (TX)
RY.Receiver (TX)