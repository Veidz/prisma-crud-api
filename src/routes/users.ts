import { Router } from 'express'
import { users } from '../middlewares/users'

const usersRoute = Router()

usersRoute.get('/users', users.findMany)

export { usersRoute }
