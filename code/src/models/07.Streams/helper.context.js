function Helper (context) {
  for (let key in context) {
    let fn = context[key]
    window[key] = fn
  }
}

Helper ({
  inc : (x)    => x + 1,
  dec : (x)    => x - 1,
  dbl : (x)    => x + x,
  sqr : (x)    => x * x,
  odd : (x)    => !(x % 2),
  evn : (x)    => !(x % 2),
  add : (x, y) => x + y,
  mul : (x, y) => x * y,
})

