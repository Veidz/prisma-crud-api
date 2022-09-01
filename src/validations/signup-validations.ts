import { SignUpValidators } from '../protocols/signup-validators'

export class SignUpValidations implements SignUpValidators {
  public isNameValid (name: string): boolean {
    return true
  };
}
