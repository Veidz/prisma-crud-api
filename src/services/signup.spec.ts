import { BadRequest } from '../errors/bad-request'
import { SignUpService } from './signup'

interface SutTypes {
  sut: SignUpService
}

const makeSut = (): SutTypes => {
  const sut = new SignUpService()
  return { sut }
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
})
