class CX {

  constructor (x) { 
    this.x = x
  }

  inc () { this.x++ }
  dec () { this.x-- }

}

export default function (x) {
  return new CX (x)
}