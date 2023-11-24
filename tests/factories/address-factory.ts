import { fakerPT_BR } from '@faker-js/faker';
import { prisma } from '@/config';

export async function createAddress(customerId: string) {
  return await prisma.address.create({
    data: {
      customerId,
      cep: fakerPT_BR.location.zipCode('#####-###'),
      country: fakerPT_BR.location.country(),
      state: fakerPT_BR.location.county(),
      street: fakerPT_BR.location.streetAddress(),
    },
  });
}
