import { customerRepository } from '@/repositories';
import { invalidDataError, notFoundError } from '@/errors';

async function findByCpfOrThrow(cpf: string) {
  const customer = await customerRepository.findByCpf(cpf);
  if (!customer) throw notFoundError('Customer');

  return customer;
}

function validateCpfLength(cpf: string) {
  if (cpf.length !== 11) throw invalidDataError('CPF length must be 11!');
}

export const customerService = { findByCpfOrThrow, validateCpfLength };
