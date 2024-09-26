import Agent from '../../../src/models/04.Channels/agent.bus.js'

const TX    = 'TX'
const DELAY = 2500

let SX = Agent ('SX')
let RX = Agent ('RX')
let RY = Agent ('RY')

SX.Sender   (TX)
RX.Receiver (TX)

setTimeout (function () {
  RY.Receiver (TX)
}, DELAY)
