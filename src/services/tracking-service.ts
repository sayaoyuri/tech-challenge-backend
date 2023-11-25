import { trackingRepository } from '@/repositories';
import { customerService } from '@/services';

async function findByCustomerCpf(cpf: string) {
  const customer = await customerService.findByCpfOrThrow(cpf);

  const trackings = await trackingRepository.findByCustomerId(customer.id);

  return trackings;
}

export const trackingService = { findByCustomerCpf };
