import { prisma } from '@/config';

async function findByCustomerId(customerId: string) {
  return await prisma.tracking.findMany({
    where: { customerId },
    include: {
      trackingStatus: {
        take: 1,
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });
}

export const trackingRepository = { findByCustomerId };
