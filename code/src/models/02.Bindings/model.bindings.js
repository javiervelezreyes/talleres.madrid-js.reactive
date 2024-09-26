let bindings = new Map ()

function Bindings (model) {

  let views

  (function create (model) {
      views = bindings.get (model) || new Set ()
      bindings.set (model, views)
  })(model)

  function   bind (view) { views.add    (view) }
  function unbind (view) { views.delete (view) }
  function fire   (ctx) { 
    for (let view of views) {
      view.refresh (ctx)
    }
  }

  return {
    bind,
    unbind,
    fire
  }

}

export default Bindings