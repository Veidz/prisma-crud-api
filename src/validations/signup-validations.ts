import { Validators } from '../protocols/validators'
import emailValidator from 'email-validator'

export class SignUpValidations implements Validators {
  public isNameValid (name: string): boolean {
    if (name.length < 4) return false
    if (name.match(/\d+/g)) return false
    return true
  }

  public isEmailValid (email: string): boolean {
    return emailValidator.validate(email)
  }

  public isPasswordValid (password: string): boolean {
    return true
  }
}
