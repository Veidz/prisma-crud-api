import prisma from '../src/database/client'
import { UserPayloadDB, UsersWithoutPassword } from '../src/protocols'
import { UsersService } from '../src/services/users'

const userPayloadDB: UserPayloadDB = {
  name: 'any_name',
  email: 'any_email@email.com',
  password: 'any_password'
}

const usersWithoutPassword: UsersWithoutPassword[] = [
  {
    name: 'any_name',
    email: 'any_email@email.com'
  }
]

const userWithoutPassword: UsersWithoutPassword = {
  name: 'any_name',
  email: 'any_email@email.com'
}

describe('ROUTE /users', () => {
  describe('GET /users', () => {
    beforeAll(async () => {
      await prisma.users.create({ data: userPayloadDB })
    })

    afterAll(async () => {
      const deleteUsers = prisma.users.deleteMany()

      await prisma.$transaction([deleteUsers])
    })

    test('Should return users successfully', async () => {
      const sut = new UsersService()
      const users = await sut.findMany()
      expect(users).toEqual(usersWithoutPassword)
    })
  })

  describe('GET /users/:name', () => {
    beforeAll(async () => {
      await prisma.users.create({ data: userPayloadDB })
    })

    afterAll(async () => {
      const deleteUsers = prisma.users.deleteMany()

      await prisma.$transaction([deleteUsers])
    })

    test('Should return user successfully', async () => {
      const sut = new UsersService()
      const users = await sut.findByEmail('any_email@email.com')
      expect(users).toEqual(userWithoutPassword)
    })
  })
})
