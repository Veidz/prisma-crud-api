import prisma from '../database/client'
import { Users } from '@prisma/client'

export const updateName = async (name: string, email: string): Promise<Users | null | undefined> => {
  try {
    const updatedUser = await prisma.users.update({
      where: { email },
      data: { name }
    })
    return updatedUser
  } catch (error) {
    console.error(error)
    await prisma.$disconnect()
  }
}
