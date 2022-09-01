import { BadRequest } from '../errors/bad-request'
import { Validators } from '../protocols/validators'
import { UserPayload } from '../protocols/user-payload'
import { SignUpValidations } from '../validations/signup-validations'
import create from '../repository/create'
import findUnique from '../repository/find-unique'
import { Conflit } from '../errors/conflit'

export class SignUpService {
  private readonly validators: Validators

  constructor (validators = new SignUpValidations()) {
    this.validators = validators
  }

  public async create (userPayload: UserPayload): Promise<void> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!userPayload[field]) throw new BadRequest(`${field} is required`)
    }

    const { name, email, password, passwordConfirmation } = userPayload
    if (!this.validators.isNameValid(name)) throw new BadRequest('Invalid name')
    if (!this.validators.isEmailValid(email)) throw new BadRequest('Invalid email')
    if (!this.validators.isPasswordValid(password)) throw new BadRequest('Invalid password')
    if (password !== passwordConfirmation) throw new BadRequest('Invalid passwordConfirmation')

    const userPayloadDB = { name, email, password }

    const userExists = await findUnique(email)
    if (userExists) throw new Conflit('User already registered')

    await create(userPayloadDB)
  }
}
