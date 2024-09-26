import Producer from '../../../src/models/06.Futures/agent.producer.js'
import Consumer from '../../../src/models/06.Futures/agent.consumer.js'
import execute  from '../../../src/helpers/helper.execute.js'

let PX = Producer ('PX')
let CX = Consumer ('CX')
let CY = Consumer ('CY')

execute (function () {
  let RX = PX.get ()
  RX.bind (CX)
  RX.bind (CY)
})

