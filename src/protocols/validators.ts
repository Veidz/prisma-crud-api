export interface Validators {
  isNameValid: (name: string) => boolean
  isEmailValid: (email: string) => boolean
  isPasswordValid: (password: string) => boolean
}
