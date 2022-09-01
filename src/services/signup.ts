import { SignUpValidators } from '../protocols/signup-validators'
import { UserPayload } from '../protocols/user-payload'
import { UserResponse } from '../protocols/user-response'
import { SignUpValidations } from '../validations/signup-validations'

export class SignUpService {
  private readonly validators: SignUpValidators

  constructor () {
    this.validators = new SignUpValidations()
  }

  public create (userPayload: UserPayload): UserResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!userPayload[field]) return { statusCode: 400, message: `${field} is required` }
    }
    const { name, email, password, passwordConfirmation } = userPayload
    if (!this.validators.isNameValid(name)) return { statusCode: 400, message: 'Invalid name' }
    if (!this.validators.isEmailValid(email)) return { statusCode: 400, message: 'Invalid email' }
    if (!this.validators.isPasswordValid(email)) return { statusCode: 400, message: 'Invalid password' }
    if (password !== passwordConfirmation) return { statusCode: 400, message: 'Invalid passwordConfirmation' }
  }
}
