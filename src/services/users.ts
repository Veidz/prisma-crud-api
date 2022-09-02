import prisma from '../database/client'
import { BadRequest, NotFound } from '../errors'
import { UsersWithoutPassword } from '../protocols'

export class UsersService {
  public async findMany (): Promise<UsersWithoutPassword[]> {
    const users = await prisma.users.findMany()
    if (!users.length) throw new NotFound('No users in the database')

    const usersWithoutPassword: UsersWithoutPassword[] = []
    for (const user of users) {
      const { id, password, created_at: createdAt, updated_at: updatedAt, ...rest } = user
      usersWithoutPassword.push(rest)
    }
    return usersWithoutPassword
  }

  public async findByEmail (email: string): Promise<UsersWithoutPassword> {
    if (!email) throw new BadRequest('No email provided')

    const user = await prisma.users.findUnique({ where: { email } })
    if (!user) throw new NotFound('No user found')

    const { id, password, created_at: createdAt, updated_at: updatedAt, ...rest } = user
    const userWithoutPassword = rest
    return userWithoutPassword
  }
}
