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
    const { sut } = makeSut()
    const httpRequest = {
      name: '',
      email: 'any_email@email.com',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = await sut.create(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.message).toEqual('name is required')
  })

  test('Should return status 400 with correct message if no email is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      name: 'any_name',
      email: '',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = await sut.create(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.message).toEqual('email is required')
  })

  test('Should return status 400 with correct message if no password is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      name: 'any_name',
      email: 'any_email@email.com',
      password: '',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = await sut.create(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.message).toEqual('password is required')
  })

  test('Should return status 400 with correct message if no password is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password',
      passwordConfirmation: ''
    }
    const httpResponse = await sut.create(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.message).toEqual('passwordConfirmation is required')
  })
})
