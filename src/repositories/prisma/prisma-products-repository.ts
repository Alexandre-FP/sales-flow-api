import { Prisma } from '@prisma/client'
import { ProductsRository } from '../products-repository'
import { PrismaService } from '@/lib/prisma'

export class PrismaProductsRepository implements ProductsRository {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.ProductsCreateInput) {
    const product = await this.prismaService.products.create({
      data,
    })

    return product
  }

  async search() {
    const product = await this.prismaService.products.findMany({})

    return product
  }

  async findById(id: string) {
    const product = await this.prismaService.products.findUnique({
      where: {
        id,
      },
    })

    return product
  }

  async update(id: string, data: Prisma.ProductsUpdateInput) {
    const product = await this.prismaService.products.update({
      where: {
        id,
      },
      data,
    })

    return product
  }

  async delete(id: string) {
    await this.prismaService.products.delete({
      where: {
        id,
      },
    })

    return null
  }
}
