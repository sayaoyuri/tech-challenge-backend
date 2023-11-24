/*
  Warnings:

  - You are about to alter the column `cpf` on the `customers` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(11)`.
  - You are about to drop the column `messageId` on the `tracking_status` table. All the data in the column will be lost.
  - You are about to drop the column `shipper` on the `trackings` table. All the data in the column will be lost.
  - You are about to drop the `status_message` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `message` to the `tracking_status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipperId` to the `trackings` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusMessage" AS ENUM ('ENTREGA_CRIADA', 'EM_TRANSITO', 'CHEGOU_A_CIDADE_DE_DESTINO', 'SAIU_PARA_ENTREGA', 'ENTREGA_REALIZADA');

-- DropForeignKey
ALTER TABLE "tracking_status" DROP CONSTRAINT "tracking_status_messageId_fkey";

-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "cpf" SET DATA TYPE VARCHAR(11);

-- AlterTable
ALTER TABLE "tracking_status" DROP COLUMN "messageId",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "message" "StatusMessage" NOT NULL;

-- AlterTable
ALTER TABLE "trackings" DROP COLUMN "shipper",
ADD COLUMN     "shipperId" TEXT NOT NULL;

-- DropTable
DROP TABLE "status_message";

-- CreateTable
CREATE TABLE "shippers" (
    "id" TEXT NOT NULL,
    "cnpj" VARCHAR(14),
    "fantasia" VARCHAR(70) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shippers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "shippers_cnpj_key" ON "shippers"("cnpj");

-- AddForeignKey
ALTER TABLE "trackings" ADD CONSTRAINT "trackings_shipperId_fkey" FOREIGN KEY ("shipperId") REFERENCES "shippers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
