import { Request, Response } from 'express'
import { UsersController } from '../controllers/users'

const usersController = new UsersController()

export const users = {
  async findMany (req: Request, res: Response) { await usersController.findMany(req, res) },
  async findByEmail (req: Request, res: Response) { await usersController.findByEmail(req, res) },
  async updateName (req: Request, res: Response) { await usersController.updateName(req, res) },
  async exclude (req: Request, res: Response) { await usersController.exclude(req, res) }
}
