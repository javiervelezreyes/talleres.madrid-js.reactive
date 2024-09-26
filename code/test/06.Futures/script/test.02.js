import Producer from '../../../src/models/06.Futures/agent.producer.js'
import Consumer from '../../../src/models/06.Futures/agent.consumer.js'
import execute  from '../../../src/helpers/helper.execute.js'

let PX = Producer ('PX')
let PY = Producer ('PY')
let CX = Consumer ('CX')
let CY = Consumer ('CY')

execute (function () {
  let RX = PX.get ()
  let RY = PY.get ()
  RX.bind (CX)
  RY.bind (CY)
})

