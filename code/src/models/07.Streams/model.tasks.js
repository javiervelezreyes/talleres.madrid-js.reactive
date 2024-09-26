let size  = x => x.length 
let stamp = Date.now ()
let delay = x => x && (stamp () - x) || 0

function Tasks () {

  function tap (fn) {
    return function (stream) {
      return function (x) {
        fn (x)
        stream (x)
      }
    }
  }
  
  function map (fn) {
    return function (stream) {
      return function (x) {
        stream (fn (x))
      }
    }
  }

  function reduce (fn, b) {
    return function (stream) {
      let c = b
      return function (x) {
        stream (c = fn (c, x))
      }
    }
  }

  function filter (pn) {
    return function (stream) {
      return function (x) {
        pn (x) && stream (x)
      }
    }
  }

  function take (n) {
    return function (stream) {
      let xs = []
      return function (x) {
        xs = [...xs, x]
        if (size (xs) == n) {
          stream (xs)
          xs = []
        }
      }
    }
  }

  function skip (n) {
    return function (stream) {
      let idx = 0
      return function (x) {
        (idx++ == n) && stream (x)
      }
    }
  }

  function debounce (ms) {
    return function (stream) {
      return function (x) {
        setTimeout (function () {
          stream (x)
        }, ms)
      }
    }
  }
  
  function throttle (ms) {
    return function (stream) {
      let time
      return function (x) {
        setTimeout (function () {
          stream (x)
          time = stamp ()
        }, delay (time))
      }
    }
  }

  return {
   tap,
   map,
   reduce,
   filter,
   take,
   skip,
   debounce,
   throttle
  }

}

export default Tasks ()