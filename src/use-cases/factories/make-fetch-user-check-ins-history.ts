import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckInsUseCase } from '../fetch-user-check-ins-history'

export function makeFetchCheckInsHistoryUseCase() {
  const repository = new PrismaCheckInsRepository()
  const useCase = new FetchUserCheckInsUseCase(repository)

  return useCase
}
