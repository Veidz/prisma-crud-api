export interface SignUpValidators {
  isNameValid: (name: string) => boolean
  isEmailValid: (email: string) => boolean
}
