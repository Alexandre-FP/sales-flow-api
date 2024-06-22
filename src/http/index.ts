import { FastifyInstance } from 'fastify'
import { usersRoutes } from './controllers/users/routes'

export async function routes(app: FastifyInstance) {
  app.register(usersRoutes)
}
