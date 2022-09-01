export interface UserPayload {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface UserPayloadDB {
  name: string
  email: string
  password: string
}
