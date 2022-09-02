import { Router } from 'express'
import { users } from '../middlewares/users'

const usersRoute = Router()

usersRoute.get('/users', users.findMany)
usersRoute.get('/users/:email', users.findByEmail)

export { usersRoute }
