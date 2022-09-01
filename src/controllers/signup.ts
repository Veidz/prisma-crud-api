import { Request, Response } from 'express'
import { SignUpService } from '../services/signup'

export class SignUpController {
  private readonly service: SignUpService

  constructor () {
    this.service = new SignUpService()
  }

  public async create (req: Request, res: Response): Promise<any> {
    try {
      await this.service.create(req.body)
      return res.status(201).json({ message: 'User successfully created' })
    } catch (error) {
      return res.status(error.status).json({ message: error.message })
    }
  }
}
