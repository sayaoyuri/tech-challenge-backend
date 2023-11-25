import { faker } from '@faker-js/faker';
import { prisma } from '@/config';
import { Customer } from '@prisma/client';

export async function createCustomer(): Promise<Customer> {
  return await prisma.customer.create({
    data: {
      cpf: mockCpf(),
      name: faker.person.fullName(),
    },
  });
}

export function mockCpf(): string{
  return faker.string.numeric({ length: 11 });
}

export function mockCustomer(incomingCpf?: string): Customer {
  return {
    id: faker.string.uuid(),
    cpf: incomingCpf || mockCpf(),
    name: faker.person.fullName(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
};
