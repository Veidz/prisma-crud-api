import { Users } from '@prisma/client'
import prisma from '../database/client'
import { NotFound } from '../errors/not-found'

export class UsersService {
  public async findMany (): Promise<Users[]> {
    const users = await prisma.users.findMany()
    if (!users) throw new NotFound('User not found')
    return users
  }
}
