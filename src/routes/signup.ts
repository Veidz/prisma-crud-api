/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { signup } from '../middlewares/signup'

const router = Router()

router.post('/signup', signup.create)

export default router
