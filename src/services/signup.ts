export class SignUpService {
  public create (userPayload: any): any {
    if (!userPayload.name) return { statusCode: 400, message: 'Name is required' }
    if (!userPayload.email) return { statusCode: 400, message: 'Email is required' }
    if (!userPayload.password) return { statusCode: 400, message: 'Password is required' }
  }
}
