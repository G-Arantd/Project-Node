/*
  Warnings:

  - The primary key for the `Ies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cnpj` on the `Ies` table. All the data in the column will be lost.
  - You are about to drop the column `codigo` on the `Ies` table. All the data in the column will be lost.
  - You are about to drop the column `dateCreated` on the `Ies` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Ies` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cnpjIes]` on the table `Ies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnpjIes` to the `Ies` table without a default value. This is not possible if the table is not empty.
  - The required column `idIes` was added to the `Ies` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `nameIes` to the `Ies` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Ies_cnpj_key";

-- AlterTable
ALTER TABLE "Ies" DROP CONSTRAINT "Ies_pkey",
DROP COLUMN "cnpj",
DROP COLUMN "codigo",
DROP COLUMN "dateCreated",
DROP COLUMN "nome",
ADD COLUMN     "cnpjIes" TEXT NOT NULL,
ADD COLUMN     "dateCreatedIes" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "idIes" TEXT NOT NULL,
ADD COLUMN     "nameIes" TEXT NOT NULL,
ADD CONSTRAINT "Ies_pkey" PRIMARY KEY ("idIes");

-- CreateIndex
CREATE UNIQUE INDEX "Ies_cnpjIes_key" ON "Ies"("cnpjIes");
