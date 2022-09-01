export class SignUpService {
  public create (userPayload: any): any {
    if (!userPayload.name) return { statusCode: 400, message: 'name is required' }
    if (!userPayload.email) return { statusCode: 400, message: 'email is required' }
    if (!userPayload.password) return { statusCode: 400, message: 'password is required' }
    if (!userPayload.passwordConfirmation) return { statusCode: 400, message: 'passwordConfirmation is required' }
  }
}
