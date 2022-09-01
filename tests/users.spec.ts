import { UsersService } from '../src/services/users'
import { prismaMock } from '../src/database/singleton'

describe('UsersService', () => {
  test('Should return empty array if no users are in the database', async () => {
    const sut = new UsersService()

    await prismaMock.users.findMany()
    await expect(sut.findMany()).resolves.toEqual([])
  })
})
