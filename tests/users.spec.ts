import { Users } from '@prisma/client'
import { prismaMock } from '../src/database/singleton'
import { UsersService } from '../src/services/users'
import { UsersWithoutPassword } from '../src/protocols'
import { BadRequest, NotFound } from '../src/errors'

const usersDB: Users[] = [
  {
    id: 'any_id',
    name: 'any_name',
    email: 'any_email@email.com',
    password: 'any_password',
    created_at: new Date(),
    updated_at: new Date()
  }
]

const usersWithoutPassword: UsersWithoutPassword[] = [
  {
    name: 'any_name',
    email: 'any_email@email.com'
  }
]

describe('UsersService', () => {
  describe('findMany method', () => {
    test('Should return correct error if no users are in the database', async () => {
      try {
        const sut = new UsersService()
        jest.spyOn(prismaMock.users, 'findMany').mockResolvedValue([])
        await sut.findMany()
      } catch (error) {
        expect(error).toEqual(new NotFound('No users in the database'))
      }
    })

    test('Should return correct users from the database', async () => {
      const sut = new UsersService()
      jest.spyOn(prismaMock.users, 'findMany').mockResolvedValue(usersDB)
      const users = await sut.findMany()
      expect(users).toEqual(usersWithoutPassword)
    })
  })

  describe('findByEmail method', () => {
    test('Should return correct error if no user is in the database', async () => {
      try {
        const sut = new UsersService()
        jest.spyOn(prismaMock.users, 'findUnique').mockResolvedValue(null)
        await sut.findByEmail('any_email@email.com')
      } catch (error) {
        expect(error).toEqual(new NotFound('No user found'))
      }
    })

    test('Should return correct error if no email is provided', async () => {
      try {
        const sut = new UsersService()
        await sut.findByEmail('')
      } catch (error) {
        expect(error).toEqual(new BadRequest('No email provided'))
      }
    })
  })

  describe('updateName method', () => {
    test('Should return correct error if no name is provided', async () => {
      try {
        const sut = new UsersService()
        await sut.updateName('', 'any_email@email.com')
      } catch (error) {
        expect(error).toEqual(new NotFound('No name provided'))
      }
    })

    test('Should return correct error if no email is provided', async () => {
      try {
        const sut = new UsersService()
        await sut.updateName('any_name', '')
      } catch (error) {
        expect(error).toEqual(new NotFound('No email provided'))
      }
    })

    test('Should return correct error if no user is found', async () => {
      try {
        const sut = new UsersService()
        jest.spyOn(prismaMock.users, 'findUnique').mockResolvedValue(null)
        await sut.updateName('any_name', 'any_email@email.com')
      } catch (error) {
        expect(error).toEqual(new NotFound('No user found'))
      }
    })
  })

  describe('exclude method', () => {
    test('Should return correct error if no email is provided', async () => {
      try {
        const sut = new UsersService()
        await sut.exclude('')
      } catch (error) {
        expect(error).toEqual(new NotFound('No email provided'))
      }
    })

    test('Should return correct error if no user is found', async () => {
      try {
        const sut = new UsersService()
        jest.spyOn(prismaMock.users, 'findUnique').mockResolvedValue(null)
        await sut.exclude('any_email@email.com')
      } catch (error) {
        expect(error).toEqual(new NotFound('No user found'))
      }
    })
  })
})
