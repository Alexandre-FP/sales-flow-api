import { PrismaService } from '@/lib/prisma'
import { SalesRository } from '../sales-repository'
import { Prisma } from '@prisma/client'

export class PrismaSalesRepository implements SalesRository {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.SaleUncheckedCreateInput) {
    const sale = await this.prismaService.sale.create({
      data,
    })

    return sale
  }

  async search() {
    const sale = await this.prismaService.sale.findMany({})

    return sale
  }

  async findById(id: string) {
    const sale = await this.prismaService.sale.findUnique({
      where: {
        id,
      },
    })

    return sale
  }

  async update(id: string, data: Prisma.SaleUncheckedUpdateInput) {
    const sale = await this.prismaService.sale.update({
      where: {
        id,
      },
      data,
    })

    return sale
  }

  async delete(id: string) {
    await this.prismaService.sale.delete({
      where: {
        id,
      },
    })

    return null
  }
}
