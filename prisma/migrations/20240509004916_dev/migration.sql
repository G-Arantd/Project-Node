/*
  Warnings:

  - You are about to drop the `Ies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Ies";

-- CreateTable
CREATE TABLE "ies" (
    "idIes" TEXT NOT NULL,
    "nameIes" TEXT NOT NULL,
    "cnpjIes" TEXT NOT NULL,
    "dateCreatedIes" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ies_pkey" PRIMARY KEY ("idIes")
);

-- CreateIndex
CREATE UNIQUE INDEX "ies_cnpjIes_key" ON "ies"("cnpjIes");
