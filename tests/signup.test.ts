import request from 'supertest'
import { app } from '../src/app'

import { UserPayload } from '../src/protocols/user-payload'

import { prismaMock } from '../src/database/singleton'
import { Users } from '@prisma/client'

const userPayload: UserPayload = {
  name: 'any_name',
  email: 'any_email@email.com',
  password: 'any_password',
  passwordConfirmation: 'any_password'
}

const userPayloadDB: Users = {
  id: 'any_id',
  name: 'any_name',
  email: 'any_email@email.com',
  password: 'any_password',
  created_at: new Date(),
  updated_at: new Date()
}

describe('POST /signup', () => {
  test('Should return status 201 with correct message if user is successfully created', async () => {
    prismaMock.users.create.mockResolvedValue(userPayloadDB)
    await request(app)
      .post('/signup')
      .send(userPayload)
      .expect(201)
  })
})
