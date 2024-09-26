import Logger  from '../../helpers/helper.logger.js'
import execute from '../../helpers/helper.execute.js'

function Agent (key) {

  let Channel
  let logger = Logger (key)

  function bind (channel) { 
    Channel = channel 
  }

  function Sender (k) {
    execute (function (n) {
      Channel.send (n)
      logger.info  (n)
    }, k)
  }

  function Receiver (k) {
    execute (async function () {
      let message = await Channel.receive ()
      logger.info  (message)
    }, k)
  }

  return {
    bind,
    Sender,
    Receiver
  }

}

export default Agent