import Agent from '../../../src/models/05.Boxes/agent.x.js'

const X = 'X'

let RX = Agent ('RX')
let WX = Agent ('WX')
let WY = Agent ('WY')

RX.Reader (X)
WX.Writer (X)
WY.Writer (X)
