import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../config/swagger.json'

const docsRoute = Router()

docsRoute.use('/api-docs', swaggerUi.serve)
docsRoute.get('/api-docs', swaggerUi.setup(swaggerDocs))

export { docsRoute }
