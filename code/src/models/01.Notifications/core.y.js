class CY {

  constructor (y) { 
    this.y = y
  }

  inc () { this.y++ }
  dec () { this.y-- }

}

export default function (y) {
  return new CY (y)
}