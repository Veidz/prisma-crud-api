import prisma from '../database/client'
import { Users } from '@prisma/client'

export const findUnique = async (userEmail: string): Promise<Users | null | undefined> => {
  try {
    const userExists = await prisma.users.findUnique({
      where: { email: userEmail }
    })
    return userExists
  } catch (error) {
    console.error(error)
    await prisma.$disconnect()
  }
}
