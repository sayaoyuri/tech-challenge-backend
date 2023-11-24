import { faker } from '@faker-js/faker';
import { prisma } from '@/config';

export async function createCarrier() {
  return await prisma.carrier.create({
    data: {
      cnpj: faker.string.numeric({ length: 14 }),
      fantasia: faker.company.name(),
    },
  });
}
