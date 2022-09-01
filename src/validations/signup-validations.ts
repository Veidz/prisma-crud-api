import { Validators } from '../protocols/validators'

export class SignUpValidations implements Validators {
  public isNameValid (name: string): boolean {
    if (name.length < 4) return false
    if (name.match(/\d+/g)) return false
    return true
  }

  public isEmailValid (email: string): boolean {
    return true
  }

  public isPasswordValid (password: string): boolean {
    return true
  }
}
