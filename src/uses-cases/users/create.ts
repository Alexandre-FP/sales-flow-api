import { UsersRository } from '@/repositories/users-repositorry'
import { User } from '@prisma/client'

interface UserUseCaseRequest {
  name: string
  number: string
  age: number
  valor_reservado_caixa: number
}

interface UserUseCaseResponse {
  user: User
}

export class UserUseCase {
  constructor(private userRepository: UsersRository) {}

  async execute({
    name,
    number,
    age,
    valor_reservado_caixa,
  }: UserUseCaseRequest): Promise<UserUseCaseResponse> {
    const user = await this.userRepository.create({
      name,
      number,
      age,
      valor_reservado_caixa,
    })

    return {
      user,
    }
  }
}
