/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { users } from '../middlewares/users'

const router = Router()

router.get('/users', users.findMany)

export default router
