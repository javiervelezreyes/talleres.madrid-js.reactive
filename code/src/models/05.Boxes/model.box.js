function Box () {

  let box = []

  function get () {
    return [...box]
  }

  function set (value) {
    box = [...box, value]
  }

  return {
    get,
    set
  }

}

export default Box