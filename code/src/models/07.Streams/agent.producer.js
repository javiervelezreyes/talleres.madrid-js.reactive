import Stream  from './model.stream.js'
import Logger  from '../../helpers/helper.logger.js'
import execute from '../../helpers/helper.execute.js'

const MAX = 10

function Agent (key) {

  let logger = Logger (key)
  let stream = Stream ()

  function start () {
    execute (function (value) {
      stream.send (value)
      logger.info (value)
    }, MAX)
  }

  function get () {
    return stream
  }
 
  return {
    get,
    start 
  }

}

export default Agent