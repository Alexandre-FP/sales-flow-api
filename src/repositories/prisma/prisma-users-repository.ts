import { Prisma } from '@prisma/client'
import { UsersRository } from '../users-repositorry'
import { PrismaService } from '@/lib/prisma'

export class PrismaUsersRepository implements UsersRository {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    const user = await this.prismaService.user.create({
      data,
    })

    return user
  }

  async search() {
    const user = await this.prismaService.user.findMany({
      where: {
        deleted_at: null,
      },
    })

    return user
  }

  async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    const user = await this.prismaService.user.update({
      where: {
        id,
      },
      data,
    })

    return user
  }

  async delete(id: string) {
    await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        deleted_at: new Date(),
      },
    })

    return null
  }

  async authenticate(number: string) {
    const user = this.prismaService.user.findUnique({
      where: {
        number,
      },
    })

    return user
  }

  async reports() {} // consulta para relatorios
}
