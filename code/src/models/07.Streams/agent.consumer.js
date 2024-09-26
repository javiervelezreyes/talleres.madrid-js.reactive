import Logger  from '../../helpers/helper.logger.js'

function Agent (key) {

  let logger = Logger (key)

  function execute (value) {
    logger.info (value)
  }
 
  return { execute }

}

export default Agent