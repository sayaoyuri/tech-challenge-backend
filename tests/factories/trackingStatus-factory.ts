import { faker } from '@faker-js/faker';
import { StatusMessage } from '@prisma/client';
import { prisma } from '@/config';

export async function createTrackingStatus(trackingId: string, message?: StatusMessage, date?: Date) {
  return await prisma.trackingStatus.create({
    data: {
      trackingId,
      message: message || StatusMessage.ENTREGA_CRIADA,
      date: date || faker.date.past(),
    },
  });
}
