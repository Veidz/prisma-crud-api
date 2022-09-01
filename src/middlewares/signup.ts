import { Request, Response } from 'express'
import { SignUpController } from '../controllers/signup'

const signUpController = new SignUpController()

export const signup = {
  async create (req: Request, res: Response) { await signUpController.create(req, res) }
}
