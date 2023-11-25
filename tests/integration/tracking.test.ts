import { StatusMessage } from '@prisma/client';
import supertest from 'supertest';
import httpStatus from 'http-status';
import { faker } from '@faker-js/faker';
import {
  createAddress,
  createCarrier,
  createCustomer,
  createShipper,
  createTracking,
  createTrackingStatus,
} from '../factories';
import { cleanDb } from '../helpers';
import app, { init } from '@/app';
import { invalidDataError, notFoundError } from '@/errors';

beforeAll(() => {
  init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe('GET /tracking/:cpf', () => {
  describe('FAILURE', () => {
    it('should respond with status 422 when cpf length is not 11', async () => {
      const { status, body } = await server.get('/tracking/123456');

      expect(status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
      expect(body).toEqual(
        expect.objectContaining({
          message: invalidDataError('CPF length must be 11!').message,
        }),
      );
    });

    it('should respond with status 404 when customer does not exist', async () => {
      const cpf = faker.string.numeric({ length: 11 });

      const { status, body } = await server.get(`/tracking/${cpf}`);

      expect(status).toBe(httpStatus.NOT_FOUND);
      expect(body).toEqual(
        expect.objectContaining({
          message: notFoundError('Customer').message,
        }),
      );
    });
  });

  describe('SUCCESS', () => {
    it('should respond with status 200 & empty array when customer does not have any tracking', async () => {
      const customer = await createCustomer();

      const { status, body } = await server.get(`/tracking/${customer.cpf}`);

      expect(status).toBe(httpStatus.OK);
      expect(body).toHaveLength(0);
    });

    it(`should respond with status 200 & array of customer's tracking`, async () => {
      const carrier = await createCarrier();
      const shipper = await createShipper();
      const customer = await createCustomer();
      const address = await createAddress(customer.id);

      const trackingObj = {
        shipperId: shipper.id,
        carrierId: carrier.id,
        customerId: customer.id,
        addressId: address.id,
        volume: 1,
      };

      const tracking = await createTracking(trackingObj);
      await createTrackingStatus(tracking.id);
      await createTrackingStatus(tracking.id, StatusMessage.ENTREGA_REALIZADA);

      const { status, body } = await server.get(`/tracking/${customer.cpf}`);

      expect(status).toBe(httpStatus.OK);
      expect(body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            shipperId: expect.any(String),
            carrierId: expect.any(String),
            customerId: expect.any(String),
            addressId: expect.any(String),
            volume: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            trackingStatus: expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(String),
                trackingId: expect.any(String),
                message: expect.any(String),
                date: expect.any(String),
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
              }),
            ]),
          }),
        ]),
      );
    });
  });
});

describe('GET /tracking/details/:id', () => {
  describe('FAILURE', () => {
    it('should respond with status 404 when tracking id does not exist', async () => {
      const { status, body } = await server.get('/tracking/details/123abc');

      expect(status).toBe(httpStatus.NOT_FOUND);
      expect(body).toEqual(
        expect.objectContaining({
          message: notFoundError('Tracking').message,
        }),
      );
    });
  });

  describe('SUCCESS', () => {
    it(`should respond with status 200 & array of customer's detailed trackings`, async () => {
      const carrier = await createCarrier();
      const shipper = await createShipper();
      const customer = await createCustomer();
      const address = await createAddress(customer.id);

      const trackingObj = {
        shipperId: shipper.id,
        carrierId: carrier.id,
        customerId: customer.id,
        addressId: address.id,
        volume: 1,
      };

      const tracking = await createTracking(trackingObj);
      await createTrackingStatus(tracking.id);
      await createTrackingStatus(tracking.id, StatusMessage.ENTREGA_REALIZADA);

      const { status, body } = await server.get(`/tracking/details/${tracking.id}`);

      expect(status).toBe(httpStatus.OK);
      expect(body).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          shipperId: expect.any(String),
          carrierId: expect.any(String),
          customerId: expect.any(String),
          addressId: expect.any(String),
          volume: expect.any(Number),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          address: expect.objectContaining({
            id: expect.any(String),
            customerId: expect.any(String),
            cep: expect.any(String),
            country: expect.any(String),
            state: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          }),
          shipper: expect.objectContaining({
            id: expect.any(String),
            cnpj: expect.any(String),
            fantasia: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          }),
          carrier: expect.objectContaining({
            id: expect.any(String),
            cnpj: expect.any(String),
            fantasia: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          }),
          customer: expect.objectContaining({
            id: expect.any(String),
            cpf: customer.cpf,
            name: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          }),
          trackingStatus: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              trackingId: expect.any(String),
              message: expect.any(String),
              date: expect.any(String),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
            }),
          ]),
        }),
      );
    });
  });
});
