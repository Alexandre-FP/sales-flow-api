import { SalesProductsRepository } from '../sale-products-repository'
import { Prisma } from '@prisma/client'
import { PrismaService } from '@/lib/prisma'

export class PrismaSalesProductsRepository implements SalesProductsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.SalesProductsUncheckedCreateInput) {
    const saleProduct = await this.prismaService.salesProducts.create({
      data,
    })

    return saleProduct
  }

  async search() {
    const salesProducts = await this.prismaService.salesProducts.findMany({})

    return salesProducts
  }

  async findById(id: string) {
    const saleProduct = await this.prismaService.salesProducts.findUnique({
      where: {
        id,
      },
    })

    return saleProduct
  }

  async update(id: string, data: Prisma.SalesProductsUncheckedUpdateInput) {
    const saleProduct = await this.prismaService.salesProducts.update({
      where: {
        id,
      },
      data,
    })

    return saleProduct
  }

  async delete(id: string) {
    await this.prismaService.salesProducts.delete({
      where: {
        id,
      },
    })

    return null
  }
}
