import { Tracking } from '@prisma/client';

export type ApplicationError = {
  name: string;
  message: string;
};

export type InputTrackingBody = Pick<Tracking, 'shipperId' | 'carrierId' | 'customerId' | 'addressId' | 'volume'>;
