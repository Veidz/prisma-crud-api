import prisma from '../database/client'
import { Users } from '@prisma/client'
import { UserPayload } from '../protocols/user-payload'

const create = async (userPayload: UserPayload): Promise<Users> => {
  try {
    const user = await prisma.users.create({ data: userPayload })
    return user
  } catch (error) {
    console.error(error)
    await prisma.$disconnect()
  }
}

export default create
