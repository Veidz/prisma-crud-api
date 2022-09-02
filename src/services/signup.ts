import { BadRequest, Conflit } from '../errors'
import { Validators, UserPayload } from '../protocols'
import { SignUpValidations } from '../validations/signup-validations'
import { create, findUnique } from '../repository'
import bcrypt from 'bcrypt'

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

    const hashedPassword = await bcrypt.hash(password, 12)

    const userPayloadDB = { name, email, password: hashedPassword }

    const userExists = await findUnique(email)
    if (userExists) throw new Conflit('User already registered')

    await create(userPayloadDB)
  }
}
