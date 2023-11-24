import { prisma } from '@/config';

export async function cleanDb() {
  await prisma.trackingStatus.deleteMany({});
  await prisma.tracking.deleteMany({});
  await prisma.carrier.deleteMany();
  await prisma.shipper.deleteMany({});
  await prisma.address.deleteMany({});
  await prisma.customer.deleteMany({});
}
