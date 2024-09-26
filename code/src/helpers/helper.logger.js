import Port from './helper.port.js'

const TEXT = 'textContent'

function Helper (key) {

  let port = Port (key)

  function info (text) { port[TEXT] = text }

  return { info }

}

export default Helper
