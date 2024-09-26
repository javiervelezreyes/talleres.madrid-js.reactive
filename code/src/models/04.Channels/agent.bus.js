import Bus     from '../../models/04.Channels/model.bus.js'
import Logger  from '../../helpers/helper.logger.js'
import execute from '../../helpers/helper.execute.js'

function Agent (key) {

  let logger = Logger (key)

  function Sender (type) {
    execute (function (n) {
      Bus.send (type, n)
      logger.info (n)
    })
  }

  function Receiver (type) {
    Bus.bind (type, {
      execute (n) {
        logger.info (n)
      }
    })
  }

  return {
    Sender,
    Receiver
  }

}

export default Agent