import { prisma } from '@/config';
import { InputTrackingBody } from '@/protocols';

export async function createTracking(tracking: InputTrackingBody) {
  const { shipperId, carrierId, customerId, addressId, volume } = tracking;
  return await prisma.tracking.create({
    data: {
      shipperId,
      carrierId,
      customerId,
      addressId,
      volume,
    },
  });
}
