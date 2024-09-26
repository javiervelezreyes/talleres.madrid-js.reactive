import Producer from '../../../src/models/07.Streams/agent.producer.js'
import Consumer from '../../../src/models/07.Streams/agent.consumer.js'
import '../../../src/models/07.Streams/helper.context.js'

let PX = Producer ('PX')
let CX = Consumer ('CX')

PX.get ()
  .map    (inc)
  .map    (sqr)
  .filter (evn)
  .reduce (add, 0)
  .subscribe (CX)

PX.start ()