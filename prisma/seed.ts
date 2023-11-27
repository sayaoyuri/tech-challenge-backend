import { PrismaClient, StatusMessage } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const carrier1 = await prisma.carrier.create({
    data: { id: '1f0a1c69-3e02-4f40-a10e-1b8c80d5d7c6', cnpj: '1234567890001', fantasia: 'SWIFT CARGO' },
  });
  const carrier2 = await prisma.carrier.create({
    data: { id: 'b03aae7e-2014-4a1b-8fbf-589f7e42c39e', cnpj: '9876543210001', fantasia: 'BLUE ARROW LOGISTICS' },
  });
  const carrier3 = await prisma.carrier.create({
    data: { id: '7de173f7-6708-4c02-82a4-83ee1f6172e5', cnpj: '5678901230001', fantasia: 'EXPRESS WINGS' },
  });
  const carrier4 = await prisma.carrier.create({
    data: { id: 'f7b59a8e-d4ad-4cb3-b2f1-3dbcf20888f4', cnpj: '3456789010001', fantasia: 'GULLIVER EXPRESS' },
  });
  const carrier5 = await prisma.carrier.create({
    data: { id: '52f2e4b8-12a6-468e-b62f-3a38ee6d69e0', cnpj: '8901234560001', fantasia: 'GLOBAL TRANSPORTS' },
  });
  const carrier6 = await prisma.carrier.create({
    data: { id: '2c71e3b0-1291-4964-8d78-9e34c2299b45', cnpj: '2345678900001', fantasia: 'PHOENIX CARRIERS' },
  });
  const carrier7 = await prisma.carrier.create({
    data: { id: '0e99f223-5763-4876-9b9f-6031c8d8f76f', cnpj: '6789012340001', fantasia: 'CARGOXPRESS' },
  });
  const carrier8 = await prisma.carrier.create({
    data: { id: 'c7dc509e-30b4-43a8-b0aa-f42df94495a3', cnpj: '4567890120001', fantasia: 'TRANSNET SOLUTIONS' },
  });
  const carrier9 = await prisma.carrier.create({
    data: { id: '48b1707e-3e92-4e8e-a0c1-c49ba09836d2', cnpj: '9012345670001', fantasia: 'RAPID CARGO' },
  });
  const carrier10 = await prisma.carrier.create({
    data: { id: 'ff1e258e-89e0-4c78-b3c5-48bae8c0546b', cnpj: '1230987650001', fantasia: 'AEROLOGIX' },
  });
  
  const shipper1 = await prisma.shipper.create({
    data: { fantasia: 'Lojas B - Suprimentos Alimentos', }
  });

  const customer1 = await prisma.customer.create({
    data: { name: 'Maria Oliveira', cpf: '35595606088' },
  });

  const address1 = await prisma.address.create({
    data: {
      customerId: customer1.id,
      cep: '04567-890',
      street: 'Avenida Principal, 456',
      state: 'Rio de Janeiro',
      country: 'Brasil',
    },
  });

  const tracking1 = await prisma.tracking.create({
    data: {
      id: "f1e7be5c-90f3-4b0a-a5ff-3a44941a5412",
      carrierId: carrier1.id,
      shipperId: shipper1.id,
      customerId: customer1.id,
      addressId: address1.id,
      volume: 1,
    },
  });

  await prisma.trackingStatus.create({
    data: { trackingId: tracking1.id, message: StatusMessage.ENTREGA_CRIADA, date: '2023-11-14T09:00:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking1.id, message: StatusMessage.EM_TRANSITO, date: '2023-11-15T10:30:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking1.id, message: StatusMessage.SAIU_PARA_ENTREGA, date: '2023-11-16T08:45:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking1.id, message: StatusMessage.ENTREGA_REALIZADA, date: '2023-11-17T11:20:00Z' }
  });

  const shipper2 = await prisma.shipper.create({
    data: { fantasia: 'Carlos Ferreira - Mercado Online', }
  });

  const customer2 = await prisma.customer.create({
    data: { name: 'Ana Souza', cpf: '24200351005' },
  });

  const address2 = await prisma.address.create({
    data: {
      customerId: customer2.id,
      cep: '06789-012',
      street: 'Avenida das Pedras, 4536',
      state: 'Bahia',
      country: 'Brasil',
    },
  });

  const tracking2 = await prisma.tracking.create({
    data: {
      id: "ad590e7f-f8b3-4739-8fe0-33fb0a39aa6f",
      carrierId: carrier2.id,
      shipperId: shipper2.id,
      customerId: customer2.id,
      addressId: address2.id,
      volume: 3,
    },
  });

  await prisma.trackingStatus.create({
    data: { trackingId: tracking2.id, message: StatusMessage.ENTREGA_CRIADA, date: '2023-11-15T09:30:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking2.id, message: StatusMessage.EM_TRANSITO, date: '2023-11-16T11:00:00Z' }
  });

  const shipper3 = await prisma.shipper.create({
    data: { fantasia: 'Peças Auto - TTR', }
  });

  const customer3 = await prisma.customer.create({
    data: { name: 'Ricardo Oliveira', cpf: '81175778010' },
  });

  const address3 = await prisma.address.create({
    data: {
      customerId: customer3.id,
      cep: '07890-345',
      street: 'Rua Principal, 7829',
      state: 'São Paulo',
      country: 'Brasil',
    },
  });

  const tracking3 = await prisma.tracking.create({
    data: {
      id: "e8e4fe50-8d57-45c0-85c2-d2c1f282fd0e",
      carrierId: carrier3.id,
      shipperId: shipper3.id,
      customerId: customer3.id,
      addressId: address3.id,
      volume: 2,
    },
  });

  await prisma.trackingStatus.create({
    data: { trackingId: tracking3.id, message: StatusMessage.ENTREGA_CRIADA, date: '2023-11-16T10:00:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking3.id, message: StatusMessage.EM_TRANSITO, date: '2023-11-17T09:45:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking3.id, message: StatusMessage.SAIU_PARA_ENTREGA, date: '2023-11-18T08:30:00Z' }
  });

  const shipper4 = await prisma.shipper.create({
    data: { fantasia: 'Gomes Prado Imóveis Sob', }
  });

  const customer4 = await prisma.customer.create({
    data: { name: 'Fernanda Lima', cpf: '32074467010' },
  });

  const address4 = await prisma.address.create({
    data: {
      customerId: customer4.id,
      cep: '05678-234',
      street: 'Avenida das Rosas, 8190',
      state: 'Santa Catarina',
      country: 'Brasil',
    },
  });

  const tracking4 = await prisma.tracking.create({
    data: {
      id: "aba7051f-61b3-463b-8976-52122f60c68f",
      carrierId: carrier4.id,
      shipperId: shipper4.id,
      customerId: customer4.id,
      addressId: address4.id,
      volume: 1,
    },
  });

  await prisma.trackingStatus.create({
    data: { trackingId: tracking4.id, message: StatusMessage.ENTREGA_CRIADA, date: '2023-11-14T09:00:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking4.id, message: StatusMessage.EM_TRANSITO, date: '2023-11-15T10:30:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking4.id, message: StatusMessage.CHEGOU_A_CIDADE_DE_DESTINO, date: '2023-11-16T08:45:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking4.id, message: StatusMessage.SAIU_PARA_ENTREGA, date: '2023-11-17T11:20:00Z' }
  });

  const shipper5 = await prisma.shipper.create({
    data: { fantasia: 'Vieira Para Você', }
  });

  const customer5 = await prisma.customer.create({
    data: { name: 'Roberto Santos', cpf: '09372525065' },
  });

  const address5 = await prisma.address.create({
    data: {
      customerId: customer5.id,
      cep: '03456-890',
      street: 'Avenida das Flores, 1233',
      state: 'Distrito Federal',
      country: 'Brasil',
    },
  });

  const tracking5 = await prisma.tracking.create({
    data: {
      id: "d5be99ab-c4bc-462f-ba91-eadb9ac7c6c1",
      carrierId: carrier5.id,
      shipperId: shipper5.id,
      customerId: customer5.id,
      addressId: address5.id,
      volume: 2,
    },
  });

  await prisma.trackingStatus.create({
    data: { trackingId: tracking5.id, message: StatusMessage.ENTREGA_CRIADA, date: '2023-11-20T11:30:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking5.id, message: StatusMessage.EM_TRANSITO, date: '2023-11-21T08:45:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking5.id, message: StatusMessage.SAIU_PARA_ENTREGA, date: '2023-11-22T09:20:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking5.id, message: StatusMessage.ENTREGA_REALIZADA, date: '2023-11-23T10:50:00Z' }
  });

  const shipper6 = await prisma.shipper.create({
    data: { fantasia: 'CoMed - Medicamentos Ultra RS', }
  });

  const customer6 = await prisma.customer.create({
    data: { name: 'Fernanda Lima', cpf: '54795289042' },
  });

  const address6 = await prisma.address.create({
    data: {
      customerId: customer6.id,
      cep: '06789-012',
      street: 'Rua Principal, 3321',
      state: 'Santa Catarina',
      country: 'Brasil',
    },
  });

  const tracking6 = await prisma.tracking.create({
    data: {
      id: "02f7f23c-d4c2-44a2-b1e7-7b50be4a203b",
      carrierId: carrier3.id,
      shipperId: shipper6.id,
      customerId: customer6.id,
      addressId: address6.id,
      volume: 2,
    },
  });

  await prisma.trackingStatus.create({
    data: { trackingId: tracking6.id, message: StatusMessage.ENTREGA_CRIADA, date: '2023-11-16T08:00:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking6.id, message: StatusMessage.EM_TRANSITO, date: '2023-11-17T09:30:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking6.id, message: StatusMessage.CHEGOU_A_FILIAL_DA_CIDADE, date: '2023-11-18T10:45:00Z' }
  });

  const shipper7 = await prisma.shipper.create({
    data: { fantasia: 'Agro Pill TO', }
  });

  const customer7 = await prisma.customer.create({
    data: { name: 'Marcelo Costa', cpf: '62817818059' },
  });

  const address7 = await prisma.address.create({
    data: {
      customerId: customer7.id,
      cep: '04567-890',
      street: 'Avenida Principal, 8901',
      state: 'Rio Grande Do Norte',
      country: 'Brasil',
    },
  });

  const tracking7 = await prisma.tracking.create({
    data: {
      id: "53d0d4e1-0b8b-4c06-b676-3e0c0c27c52d",
      carrierId: carrier5.id,
      shipperId: shipper7.id,
      customerId: customer7.id,
      addressId: address7.id,
      volume: 1,
    },
  });

  await prisma.trackingStatus.create({
    data: { trackingId: tracking7.id, message: StatusMessage.ENTREGA_CRIADA, date: '2023-11-20T08:30:00Z' }
  });

  const shipper8 = await prisma.shipper.create({
    data: { fantasia: 'EComercial Compre Online', }
  });

  const customer8 = await prisma.customer.create({
    data: { name: 'Pedro Alves', cpf: '01582267049' },
  });

  const address8 = await prisma.address.create({
    data: {
      customerId: customer8.id,
      cep: '09876-543',
      street: 'Avenida Principal, 7829',
      state: 'Pernambuco',
      country: 'Brasil',
    },
  });

  const tracking8 = await prisma.tracking.create({
    data: {
      id: "e9bcf89a-1b8e-4df4-b9b4-df33b9dfc3c5",
      carrierId: carrier6.id,
      shipperId: shipper8.id,
      customerId: customer8.id,
      addressId: address8.id,
      volume: 3,
    },
  });

  await prisma.trackingStatus.create({
    data: { trackingId: tracking8.id, message: StatusMessage.ENTREGA_CRIADA, date: '2023-11-24T08:00:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking8.id, message: StatusMessage.EM_TRANSITO, date: '2023-11-25T09:30:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking8.id, message: StatusMessage.CHEGOU_A_FILIAL_DA_CIDADE, date: '2023-11-26T10:45:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking8.id, message: StatusMessage.ENTREGA_REALIZADA, date: '2023-11-27T12:15:00Z' }
  });

  const shipper9 = await prisma.shipper.create({
    data: { fantasia: 'Ricardo Carvalho ME', }
  });

  const customer9 = await prisma.customer.create({
    data: { name: 'Isabela Santos', cpf: '35350517031' },
  });

  const address9 = await prisma.address.create({
    data: {
      customerId: customer9.id,
      cep: '67890-123',
      street: 'Avenida das Flores, 4561',
      state: 'Mato Grosso',
      country: 'Brasil',
    },
  });

  const tracking9 = await prisma.tracking.create({
    data: {
      id: "d1f22415-526f-4be0-8f13-d4be034da858",
      carrierId: carrier7.id,
      shipperId: shipper9.id,
      customerId: customer9.id,
      addressId: address9.id,
      volume: 2,
    },
  });

  await prisma.trackingStatus.create({
    data: { trackingId: tracking9.id, message: StatusMessage.ENTREGA_CRIADA, date: '2023-11-28T08:30:00Z' }
  });
  await prisma.trackingStatus.create({
    data: { trackingId: tracking9.id, message: StatusMessage.EM_TRANSITO, date: '2023-11-29T10:00:00Z' }
  });
}

main().
  catch((e) => {
    console.log(e);
    process.exit(1);
  }).finally(async () => {
    await prisma.$disconnect();
  });