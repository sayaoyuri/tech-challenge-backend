import { prisma } from '@/config';

async function findByCpf(cpf: string) {
  return prisma.customer.findUnique({
    where: { cpf },
  });
}

export const customerRepository = { findByCpf };
