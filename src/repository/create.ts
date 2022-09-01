import prisma from '../database/client'
import { Users } from '@prisma/client'
import { UserPayloadDB } from '../protocols/user-payload'

export const create = async (userPayload: UserPayloadDB): Promise<Users> => {
  try {
    const user = await prisma.users.create({ data: userPayload })
    return user
  } catch (error) {
    console.error(error)
    await prisma.$disconnect()
  }
}
