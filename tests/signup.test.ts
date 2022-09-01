import request from 'supertest'
import { app } from '../src/app'

import { UserPayload } from '../src/protocols/user-payload'

const userPayload: UserPayload = {
  name: 'any_name',
  email: 'any_email@email.com',
  password: 'any_password',
  passwordConfirmation: 'any_password'
}

describe('POST /signup', () => {
  test('Should return status 201 with correct message if user is successfully created', async () => {
    await request(app)
      .post('/signup')
      .send(userPayload)
      .expect(201)
  })
})
