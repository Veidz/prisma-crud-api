import { UsersService } from '../src/services/users'
import { prismaMock } from '../src/database/singleton'
import { NotFound } from '../src/errors'

describe('UsersService', () => {
  test('Should return correct error if no users are in the database', async () => {
    try {
      const sut = new UsersService()
      jest.spyOn(prismaMock.users, 'findMany').mockResolvedValue([])
      await sut.findMany()
    } catch (error) {
      expect(error).toEqual(new NotFound('No users in the database'))
    }
  })
})
