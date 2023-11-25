import { notFoundError } from '@/errors';
import { trackingRepository } from '@/repositories';
import { customerService } from '@/services';

async function findByCustomerCpf(cpf: string) {
  const customer = await customerService.findByCpfOrThrow(cpf);

  const trackings = await trackingRepository.findByCustomerId(customer.id);

  return trackings;
}

async function findById(id: string) {
  const tracking = await trackingRepository.findById(id);
  if (!tracking) throw notFoundError('Tracking');

  return tracking;
}

export const trackingService = { findById, findByCustomerCpf };
