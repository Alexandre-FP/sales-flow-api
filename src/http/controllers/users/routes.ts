import { searchAll } from './search-all'
import { FastifyInstance } from 'fastify'
import { create } from './create'
import { deleteUser } from './delete'

export async function usersRoutes(app: FastifyInstance) {
  app.get(
    '/users',
    {
      schema: {
        summary: 'Get all users',
        tags: ['user'],
        response: {
          200: {
            description: 'List of users',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                number: { type: 'string' },
                age: { type: 'number' },
                valor_reservado_caixa: { type: 'number' },
              },
            },
          },
        },
      },
    },
    searchAll,
  )

  app.post(
    '/users',
    {
      schema: {
        summary: 'Create a new user',
        tags: ['user'],
        body: {
          type: 'object',
          required: ['name', 'number', 'age', 'valor_reservado_caixa'],
          properties: {
            name: { type: 'string' },
            number: { type: 'string' },
            age: { type: 'integer' },
            valor_reservado_caixa: { type: 'number' },
          },
        },
        response: {
          201: {
            description: 'User created successfully',
            type: 'object',
            properties: {
              success: { type: 'boolean' },
              message: { type: 'string' },
            },
          },
        },
      },
    },
    create,
  )

  app.delete(
    '/user/:id',
    {
      schema: {
        summary: 'Delete user by ID',
        tags: ['user'],
        params: {
          type: 'object',
          required: ['id'],
          properties: {
            id: { type: 'string', description: 'User ID' },
          },
        },
      },
    },
    deleteUser,
  )
}
