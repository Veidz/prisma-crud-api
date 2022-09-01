import { BadRequest } from '../errors/bad-request'
import { Validators } from '../protocols/validators'
import { SignUpService } from './signup'

interface SutTypes {
  sut: SignUpService
  validators: Validators
}

const makeValidators = (): Validators => {
  class SignUpValidationsStub implements Validators {
    isNameValid (name: string): boolean {
      return true
    }

    isEmailValid (email: string): boolean {
      return true
    }

    isPasswordValid (password: string): boolean {
      return true
    }
  }
  return new SignUpValidationsStub()
}

const makeSut = (): SutTypes => {
  const validators = makeValidators()
  const sut = new SignUpService()
  return { sut, validators }
}

describe('SignUpService', () => {
  test('Should return status 400 with correct message if no name is provided', async () => {
    try {
      const { sut } = makeSut()
      const httpRequest = {
        name: '',
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
      await sut.create(httpRequest)
    } catch (error) {
      expect(error).toEqual(new BadRequest('name is required'))
    }
  })

  test('Should return status 400 with correct message if no email is provided', async () => {
    try {
      const { sut } = makeSut()
      const httpRequest = {
        name: 'any_name',
        email: '',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
      await sut.create(httpRequest)
    } catch (error) {
      expect(error).toEqual(new BadRequest('email is required'))
    }
  })

  test('Should return status 400 with correct message if no password is provided', async () => {
    try {
      const { sut } = makeSut()
      const httpRequest = {
        name: 'any_name',
        email: 'any_email@email.com',
        password: '',
        passwordConfirmation: 'any_password'
      }
      await sut.create(httpRequest)
    } catch (error) {
      expect(error).toEqual(new BadRequest('password is required'))
    }
  })

  test('Should return status 400 with correct message if no password is provided', async () => {
    try {
      const { sut } = makeSut()
      const httpRequest = {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: ''
      }
      await sut.create(httpRequest)
    } catch (error) {
      expect(error).toEqual(new BadRequest('passwordConfirmation is required'))
    }
  })

  test('Should return status 400 with correct message if invalid name is provided', async () => {
    try {
      const { sut, validators } = makeSut()
      jest.spyOn(validators, 'isNameValid').mockReturnValueOnce(false)
      const httpRequest = {
        name: 'invalid_name',
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
      await sut.create(httpRequest)
    } catch (error) {
      expect(error).toEqual(new BadRequest('Invalid name'))
    }
  })

  test('Should return status 400 with correct message if invalid email is provided', async () => {
    try {
      const { sut, validators } = makeSut()
      jest.spyOn(validators, 'isEmailValid').mockReturnValueOnce(false)
      const httpRequest = {
        name: 'any_name',
        email: 'invalid_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
      await sut.create(httpRequest)
    } catch (error) {
      expect(error).toEqual(new BadRequest('Invalid email'))
    }
  })

  test('Should return status 400 with correct message if invalid password is provided', async () => {
    try {
      const { sut, validators } = makeSut()
      jest.spyOn(validators, 'isPasswordValid').mockReturnValueOnce(false)
      const httpRequest = {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'invalid_password',
        passwordConfirmation: 'invalid_password'
      }
      await sut.create(httpRequest)
    } catch (error) {
      expect(error).toEqual(new BadRequest('Invalid password'))
    }
  })
})
