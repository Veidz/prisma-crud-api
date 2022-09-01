import { UserPayloadDB } from '../src/protocols/user-payload'

import prisma from '../src/database/client'

const userPayloadDB: UserPayloadDB = {
  name: 'any_name',
  email: 'any_email@email.com',
  password: 'any_password'
}

describe('POST /signup', () => {
  afterAll(async () => {
    const deleteUsers = prisma.users.deleteMany()

    await prisma.$transaction([deleteUsers])
  })

  test('Should create user successfully', async () => {
    const createdUser = await prisma.users.create({ data: userPayloadDB })
    expect(createdUser).toHaveProperty('id')
    expect(createdUser).toHaveProperty('name')
    expect(createdUser).toHaveProperty('email')
    expect(createdUser).toHaveProperty('password')
    expect(createdUser).toHaveProperty('created_at')
    expect(createdUser).toHaveProperty('updated_at')
  })
})
