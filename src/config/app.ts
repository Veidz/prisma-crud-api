import express from 'express'
import { docsRoute, signUpRoute, usersRoute } from '../routes'

class App {
  public app: express.Express

  constructor () {
    this.app = express()

    this.config()
  }

  private config (): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH')
      res.header('Access-Control-Allow-Headers', '*')
      next()
    }

    this.app.use(express.json())
    this.app.use(accessControl)
    this.app.use(docsRoute)
    this.app.use(signUpRoute)
    this.app.use(usersRoute)
  }

  public start (PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`))
  }
}

export { App }

export const { app } = new App()
