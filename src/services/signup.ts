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
    const { name, email } = userPayload
    const isNameValid = this.validators.isNameValid(name)
    if (!isNameValid) return { statusCode: 400, message: 'Invalid name' }
    const isEmailValid = this.validators.isEmailValid(email)
    if (!isEmailValid) return { statusCode: 400, message: 'Invalid email' }
  }
}
