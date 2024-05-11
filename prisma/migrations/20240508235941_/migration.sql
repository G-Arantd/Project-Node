-- CreateTable
CREATE TABLE "Ies" (
    "idIes" TEXT NOT NULL,
    "nameIes" TEXT NOT NULL,
    "cnpjIes" TEXT NOT NULL,
    "dateCreatedIes" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ies_pkey" PRIMARY KEY ("idIes")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ies_cnpjIes_key" ON "Ies"("cnpjIes");
