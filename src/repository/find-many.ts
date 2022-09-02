import prisma from '../database/client'
import { Users } from '@prisma/client'

export const findMany = async (): Promise<Users[] | null | undefined> => {
  try {
    const users = await prisma.users.findMany()
    return users
  } catch (error) {
    console.error(error)
    await prisma.$disconnect()
  }
}
