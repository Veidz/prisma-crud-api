export class NotFound extends Error {
  public status: number
  public message: string

  constructor (message: string) {
    super()
    this.status = 404
    this.message = message
  }
}
