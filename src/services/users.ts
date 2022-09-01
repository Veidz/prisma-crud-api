import prisma from '../database/client'
import { NotFound } from '../errors'
import { UsersWithoutPassword } from '../protocols'

export class UsersService {
  public async findMany (): Promise<UsersWithoutPassword[]> {
    const users = await prisma.users.findMany()
    if (!users) throw new NotFound('User not found')

    const usersWithoutPassword: UsersWithoutPassword[] = []
    for (const user of users) {
      const { id, password, created_at: createdAt, updated_at: updatedAt, ...rest } = user
      usersWithoutPassword.push(rest)
    }
    return usersWithoutPassword
  }
}
