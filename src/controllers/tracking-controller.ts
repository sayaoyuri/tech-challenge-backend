import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { customerService, trackingService } from '@/services';

export async function findTrackingById(req: Request, res: Response) {
  const { id } = req.params;

  const tracking = await trackingService.findById(id);

  res.status(httpStatus.OK).send(tracking);
}

export async function findCustomerTrackings(req: Request, res: Response) {
  const { cpf } = req.params;
  customerService.validateCpfLength(cpf);

  const trackings = await trackingService.findByCustomerCpf(cpf);

  res.status(httpStatus.OK).send(trackings);
}
