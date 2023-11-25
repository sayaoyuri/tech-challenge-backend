import { Router } from 'express';
import { findCustomerTrackings, findTrackingById } from '@/controllers/tracking-controller';

export const trackingRouter = Router();
trackingRouter.get('/:cpf', findCustomerTrackings).get('/details/:id', findTrackingById);
