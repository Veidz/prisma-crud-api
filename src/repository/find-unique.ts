import prisma from '../database/client'
import { Users } from '@prisma/client'

const findUnique = async (userEmail: string): Promise<Users> => {
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

export default findUnique
