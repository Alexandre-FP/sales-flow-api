import { searchAll } from './search-all'
import { FastifyInstance } from 'fastify'
import { create } from './create'
import { deleteUser } from './delete'

export async function usersRoutes(app: FastifyInstance) {
  /** Authenticate */
  app.get('/users', searchAll)

  app.post('/users', create)

  app.delete('/user/:id', deleteUser)
}
