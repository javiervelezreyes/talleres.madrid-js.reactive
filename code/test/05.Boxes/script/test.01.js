import Agent from '../../../src/models/05.Boxes/agent.x.js'

const X = 'X'

let RX = Agent ('RX')
let WX = Agent ('WX')

RX.Reader (X)
WX.Writer (X)
