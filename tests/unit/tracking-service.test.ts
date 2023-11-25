import { Customer } from '@prisma/client';
import {  mockCpf, mockCustomer, mockTracking } from '../factories';
import { customerService, trackingService } from '@/services';
import { trackingRepository } from '@/repositories';

describe('findByCustomerCpf', () => {
  it('should return emtpy array when no trackings were found', () => {
    const cpf = mockCpf();

    jest.spyOn(customerService, 'findByCpfOrThrow').mockImplementation(async (): Promise<Customer> => {
      return mockCustomer(cpf);
    });

    jest.spyOn(trackingRepository, 'findByCustomerId').mockImplementation(async (): Promise<any> => {
      return [];
    });

    const result = trackingService.findByCustomerCpf(cpf);
    
    expect(result).resolves.toEqual([]);
  });

  it('should return tracking array', () => {
    const cpf = mockCpf();
    const trackingMock = mockTracking();

    jest.spyOn(customerService, 'findByCpfOrThrow').mockImplementation(async (): Promise<Customer> => {
      return mockCustomer(cpf);
    });

    jest.spyOn(trackingRepository, 'findByCustomerId').mockImplementation(async (): Promise<any> => {
      return [
        trackingMock
      ];
    });

    const result = trackingService.findByCustomerCpf(cpf);

    expect(result).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...trackingMock,
        }),
      ]),
    );
  });
});
