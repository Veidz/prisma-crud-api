import prisma from '../database/client'

export const exclude = async (email: string): Promise<void> => {
  try {
    await prisma.users.delete({ where: { email } })
  } catch (error) {
    console.error(error)
    await prisma.$disconnect()
  }
}
