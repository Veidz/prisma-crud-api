import { Router } from 'express'
import { signUp } from '../middlewares/signup'

const signUpRoute = Router()

signUpRoute.post('/signup', signUp.create)

export { signUpRoute }
