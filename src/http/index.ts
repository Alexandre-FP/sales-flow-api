import { FastifyInstance } from 'fastify'
import { usersRoutes } from './controllers/users/routes'
import { productsRoutes } from './controllers/products/routes'

export async function routes(app: FastifyInstance) {
  app.register(usersRoutes)
  app.register(productsRoutes)
}
