import Response from './model.response.js'
import Logger   from '../../helpers/helper.logger.js'

const DELAY = 1000

function Agent (key) {

  let idx    = 0
  let logger = Logger (key)

  function get () {
    return Response (function (fire) {
      setTimeout (function () {
        let value = ++idx
        logger.info (value)
        fire (value)
      }, DELAY)
    })
  }
  
  return { get }

}

export default Agent