import { ProductsRository } from '@/repositories/products-repository'
import { Products } from '@prisma/client'

interface ProductUseCaseRequest {
  name: string
  description: string
  valor: number
}

interface ProductUseCaseResponse {
  product: Products
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductsRository) {}

  async execute({
    name,
    description,
    valor,
  }: ProductUseCaseRequest): Promise<ProductUseCaseResponse> {
    const product = await this.productRepository.create({
      name,
      description,
      valor,
    })

    return {
      product,
    }
  }
}
