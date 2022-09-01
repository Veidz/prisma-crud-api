import { SignUpService } from './signup'

describe('SignUpService', () => {
  test('Should return status 400 with correct message if no name is provided', async () => {
    const sut = new SignUpService()
    const httpRequest = {
      email: 'any_email@email.com',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = await sut.create(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.message).toEqual('Name is required')
  })
})
