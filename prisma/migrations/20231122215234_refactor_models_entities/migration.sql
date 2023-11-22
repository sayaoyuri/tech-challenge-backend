/*
  Warnings:

  - You are about to drop the column `endereco` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `pais` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `remetente` on the `trackings` table. All the data in the column will be lost.
  - You are about to drop the column `volumes` on the `trackings` table. All the data in the column will be lost.
  - Added the required column `country` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipper` to the `trackings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume` to the `trackings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "endereco",
DROP COLUMN "estado",
DROP COLUMN "pais",
ADD COLUMN     "country" VARCHAR(50) NOT NULL,
ADD COLUMN     "state" VARCHAR(50) NOT NULL,
ADD COLUMN     "street" VARCHAR(70) NOT NULL;

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "nome",
ADD COLUMN     "name" VARCHAR(50) NOT NULL,
ALTER COLUMN "cpf" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "trackings" DROP COLUMN "remetente",
DROP COLUMN "volumes",
ADD COLUMN     "shipper" VARCHAR(70) NOT NULL,
ADD COLUMN     "volume" INTEGER NOT NULL;
