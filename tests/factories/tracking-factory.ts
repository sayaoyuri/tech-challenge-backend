import { faker } from '@faker-js/faker';
import { StatusMessage, Tracking, TrackingStatus } from '@prisma/client';
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

export function mockTracking(): Tracking & { trackingStatus: TrackingStatus[] } {
  const trackingId = faker.string.uuid();

  return {
    id: trackingId,
    customerId: faker.string.uuid(),
    addressId: faker.string.uuid(),
    carrierId: faker.string.uuid(),
    shipperId: faker.string.uuid(),
    volume: 1,
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    trackingStatus: [
      {
        id: faker.string.uuid(),
        trackingId,
        message: StatusMessage.ENTREGA_CRIADA,
        date: faker.date.recent(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    ],
  };
}
