import { faker } from '@faker-js/faker';
import { prisma } from '@/config';

export async function createCustomer() {
  return await prisma.customer.create({
    data: {
      cpf: faker.string.numeric({ length: 11 }),
      name: faker.person.fullName(),
    },
  });
}
