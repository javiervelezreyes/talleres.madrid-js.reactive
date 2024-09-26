import Agent from '../../../src/models/04.Channels/agent.bus.js'

const TX = 'TX'
const TY = 'TY'

let SX  = Agent ('SX')
let SY  = Agent ('SY')
let RXY = Agent ('RXY')

SX.Sender   (TX)
SY.Sender   (TY)
RXY.Receiver (TX)
RXY.Receiver (TY)