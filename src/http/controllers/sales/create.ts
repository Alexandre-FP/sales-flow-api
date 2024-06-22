import { makeCreateSaleUseCase } from '@/uses-cases/factories/make-create-sale-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  await makeCreateSaleUseCase().execute({
    userId: request.user.sub,
  })

  return reply.status(201).send()
}
