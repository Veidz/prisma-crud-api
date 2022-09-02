import { Request, Response } from 'express'
import { UsersService } from '../services/users'

export class UsersController {
  private readonly service: UsersService

  constructor () {
    this.service = new UsersService()
  }

  public async findMany (_req: Request, res: Response): Promise<any> {
    try {
      const users = await this.service.findMany()
      return res.status(200).json(users)
    } catch (error) {
      return res.status(error.status).json({ message: error.message })
    }
  }

  public async findByEmail (req: Request, res: Response): Promise<any> {
    try {
      const user = await this.service.findByEmail(req.params.email)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(error.status).json({ message: error.message })
    }
  }
}
