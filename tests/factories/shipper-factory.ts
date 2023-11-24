import { faker } from '@faker-js/faker';
import { prisma } from '@/config';

export async function createShipper() {
  return await prisma.shipper.create({
    data: {
      cnpj: faker.string.numeric({ length: 14 }),
      fantasia: faker.company.name(),
    },
  });
}
