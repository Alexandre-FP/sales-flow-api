import { makeCreateSaleUseCase } from '@/uses-cases/factories/make-create-sale-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    user_id: z.string(),
  })

  const { user_id } = createBodySchema.parse(request.body)

  await makeCreateSaleUseCase().execute({
    userId: user_id,
  })

  return reply.status(201).send()
}
