export class Conflit extends Error {
  public status: number
  public message: string

  constructor (message: string) {
    super()
    this.status = 409
    this.message = message
  }
}
