import { SignUpValidators } from '../protocols/signup-validators'

export class SignUpValidations implements SignUpValidators {
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
