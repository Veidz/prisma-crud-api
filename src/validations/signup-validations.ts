import { Validators } from '../protocols/validators'

export class SignUpValidations implements Validators {
  public isNameValid (name: string): boolean {
    return true
  }

  public isEmailValid (email: string): boolean {
    return true
  }

  public isPasswordValid (password: string): boolean {
    return true
  }
}
