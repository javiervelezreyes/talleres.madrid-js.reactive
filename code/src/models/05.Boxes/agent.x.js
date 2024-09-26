import Shared  from '../../models/05.Boxes/model.shared.js'
import Logger  from '../../helpers/helper.logger.js'
import execute from '../../helpers/helper.execute.js'

let add = (x, y) => x + y

function Agent (key) {

  let logger = Logger (key)

  function Box (key) {
    return (
      Shared.get    (key) || 
      Shared.create (key)
    )
  }
 
  function Reader (k) {
    execute (function () {
      let values = Box (k).get ()
      let value  = values.reduce (add, 0)
      logger.info (value)
    })
  }

  function Writer (k) {
    execute (function (value) {
      Box (k).set (value)
      logger.info (value)
    })
  }

  return {
    Reader,
    Writer
  }

}

export default Agent