import Box from './model.box.js'

function Shared () {

  let boxes = new Map ()

  function create (key) {
    let box = Box ()
    boxes.set (key, box)
    return box
  }

  function get (key) {
    return (
       key && has (key) && boxes.get (key) ||
      !key && boxes.keys ()
    )
  }

  function has (key) {
    return boxes.has (key)
  }

  function remove (key) {
     key && boxes.delete (key)
    !key && boxes.clear ()
  }

  return {
    create,
    get,
    has,
    remove
  }

}

export default Shared ()