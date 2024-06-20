import { makeUpdateSaleUseCase } from '@/uses-cases/factories/make-update-sale-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CheckSaleExist } from '@/uses-cases/errors/check-sale-existe'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    userId: z.string(),
  })

  const paramsSale = z.object({
    id: z.string(),
  })

  try {
    const { userId } = updateBodySchema.parse(request.body)

    const { id } = paramsSale.parse(request.params)

    await makeUpdateSaleUseCase().execute({
      id,
      userId,
    })

    return reply.status(200).send()
  } catch (err) {
    if (err instanceof CheckSaleExist) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
