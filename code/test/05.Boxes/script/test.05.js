import Agent from '../../../src/models/05.Boxes/agent.x.js'

const X = 'X'

let RX = Agent ('RX')
let RY = Agent ('RY')
let WX = Agent ('WX')

RX.Reader (X)
RY.Reader (X)
WX.Writer (X)
