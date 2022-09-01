import { BadRequest } from '../errors/bad-request'
import { Validators } from '../protocols/validators'
import { UserPayload } from '../protocols/user-payload'
import { SignUpValidations } from '../validations/signup-validations'

export class SignUpService {
  private readonly validators: Validators

  constructor () {
    this.validators = new SignUpValidations()
  }

  public create (userPayload: UserPayload): any {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!userPayload[field]) throw new BadRequest(`${field} is required`)
    }

    const { name, email, password, passwordConfirmation } = userPayload
    if (!this.validators.isNameValid(name)) throw new BadRequest('Invalid name')
    if (!this.validators.isEmailValid(email)) throw new BadRequest('Invalid email')
    if (!this.validators.isPasswordValid(email)) throw new BadRequest('Invalid password')
    if (password !== passwordConfirmation) throw new BadRequest('Invalid passwordConfirmation')
  }
}
