import { prisma } from '@/config';

async function findById(id: string) {
  return await prisma.tracking.findUnique({
    where: { id },
    include: {
      address: true,
      carrier: true,
      customer: true,
      shipper: true,
      trackingStatus: {
        orderBy: {
          date: 'asc',
        },
      },
    },
  });
}

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

export const trackingRepository = { findById, findByCustomerId };
