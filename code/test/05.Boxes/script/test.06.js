import Agent from '../../../src/models/05.Boxes/agent.x.js'

const X = 'X'
const Y = 'Y'

let RX = Agent ('RX')
let RY = Agent ('RY')
let WX = Agent ('WX')
let WY = Agent ('WY')

RX.Reader (X)
RY.Reader (Y)
WX.Writer (X)
WY.Writer (Y)
