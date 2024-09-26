import Logger from '../../helpers/helper.logger.js'

const PREFIX = 'OX'
const ON     = true
const OFF    = false

function Observer () {

  let active = ON
  let logger = Logger (PREFIX)

  function on  () { active = ON }
  function off () { active = OFF }
  function execute ({after, key}) {
    let value = after[key]
    active && logger.info (value)
  }

  return { 
    on,
    off,
    execute 
  }

} 

export default Observer ()