import { Router } from 'express';
import { findCustomerTrackings } from '@/controllers/tracking-controller';

export const trackingRouter = Router();
trackingRouter.get('/:cpf', findCustomerTrackings);
