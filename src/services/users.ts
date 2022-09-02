import { BadRequest, NotFound } from '../errors'
import { UsersWithoutPassword } from '../protocols'
import { findMany, findUnique, updateName } from '../repository'

export class UsersService {
  public async findMany (): Promise<UsersWithoutPassword[]> {
    const users = await findMany()
    if (!users) throw new NotFound('No users in the database')

    const usersWithoutPassword: UsersWithoutPassword[] = []
    for (const user of users) {
      const { id, password, created_at: createdAt, updated_at: updatedAt, ...rest } = user
      usersWithoutPassword.push(rest)
    }
    return usersWithoutPassword
  }

  public async findByEmail (email: string): Promise<UsersWithoutPassword> {
    if (!email) throw new BadRequest('No email provided')

    const user = await findUnique(email)
    if (!user) throw new NotFound('No user found')

    const { id, password, created_at: createdAt, updated_at: updatedAt, ...rest } = user
    const userWithoutPassword = rest
    return userWithoutPassword
  }

  public async updateName (name: string, email: string): Promise<any> {
    if (!name) throw new BadRequest('No name provided')
    if (!email) throw new BadRequest('No email provided')

    const user = await findUnique(email)
    if (!user) throw new NotFound('No user found')

    const updatedUser = await updateName(name, email)
    return updatedUser
  }
}
