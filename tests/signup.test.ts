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
  test('Should return correct message if user is successfully created', async () => {
    await request(app)
      .post('/singup')
      .send(userPayload)
      .set('Accept', 'application/json')
      .expect((res) => {
        res.body.message = 'User successfully created'
      })
  })
})
