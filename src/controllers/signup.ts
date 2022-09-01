import { Request, Response } from 'express'
import { SignUpService } from '../services/signup'

export class SignUpController {
  private readonly service: SignUpService

  constructor () {
    this.service = new SignUpService()
  }

  public async create (req: Request, res: Response): Promise<any> {
    const user = await this.service.create(req.body)
    console.log(user)
    return res.status(200).json('meu cu')
  }
}
