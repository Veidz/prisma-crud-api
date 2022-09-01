export class SignUpService {
  public create (userPayload: any): any {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!userPayload[field]) return { statusCode: 400, message: `${field} is required` }
    }
  }
}
