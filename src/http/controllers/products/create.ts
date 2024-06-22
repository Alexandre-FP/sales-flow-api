import { makeCreateProductUseCase } from '@/uses-cases/factories/make-create-product-use-case'
import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function createProduct(
  request: FastifyRequest,
  replfy: FastifyReply,
) {
  const createBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    valor: z.number(),
  })

  const { name, description, valor } = createBodySchema.parse(request.body)

  const createProductUseCase = makeCreateProductUseCase()

  await createProductUseCase.execute({
    name,
    description,
    valor,
  })

  return replfy.status(201).send({
    success: true,
    message: 'Produto cadastrado com sucesso',
  })
}
