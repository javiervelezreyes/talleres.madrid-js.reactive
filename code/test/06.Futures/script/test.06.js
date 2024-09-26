import Producer from '../../../src/models/06.Futures/agent.producer.js'
import Consumer from '../../../src/models/06.Futures/agent.consumer.js'
import execute  from '../../../src/helpers/helper.execute.js'

let PX = Producer ('PX')
let PY = Producer ('PY')
let CX = Consumer ('CX')

execute (function () {
  let RX = PX.get ()
  RX.bind (CX)
})

execute (function () {
  let RY = PY.get ()
  RY.bind (CX)
})
