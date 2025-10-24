-- CreateEnum
CREATE TYPE "Classe" AS ENUM ('ECONOMICA', 'EXECUTIVA', 'PRIMEIRA');

-- CreateTable
CREATE TABLE "AirlineTicket" (
    "id" SERIAL NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "classe" "Classe" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "costumerId" INTEGER NOT NULL,

    CONSTRAINT "AirlineTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Costumer" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Costumer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Costumer_email_key" ON "Costumer"("email");

-- AddForeignKey
ALTER TABLE "AirlineTicket" ADD CONSTRAINT "AirlineTicket_costumerId_fkey" FOREIGN KEY ("costumerId") REFERENCES "Costumer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
