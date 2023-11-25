import { Customer } from '@prisma/client';
import { mockCpf, mockCustomer } from '../factories';
import { customerService } from '@/services';
import { invalidDataError, notFoundError } from '@/errors';
import { customerRepository } from '@/repositories';

describe('findByCpfOrThrow', () => {
  it('should throw notFoundError when customer does not exist', () => {
    jest.spyOn(customerRepository, 'findByCpf').mockImplementationOnce(() => {
      return null;
    });

    const cpf = mockCpf();

    const result = customerService.findByCpfOrThrow(cpf);

    expect(result).rejects.toEqual(notFoundError('Customer'));
  });

  it('should return a customer object', () => {
    const customerMock = mockCustomer();

    jest.spyOn(customerRepository, 'findByCpf').mockImplementationOnce(async (): Promise<Customer> => {
      return customerMock;
    });

    const result = customerService.findByCpfOrThrow(customerMock.cpf);

    expect(result).resolves.toBe(customerMock);
  });
});

describe('validateCpfLength', () => {
  it('should be void when CPF length is 11', () => {
    const cpf = mockCpf();
    const result = customerService.validateCpfLength(cpf);

    expect(result).toBe(undefined);
  });

  it('should throw invalidDataError when cpf length differs from 11', () => {
    expect(() => customerService.validateCpfLength('1234')).toThrow(invalidDataError('CPF length must be 11!'))
  });
});
