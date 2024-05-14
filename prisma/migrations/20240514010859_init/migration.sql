-- CreateEnum
CREATE TYPE "PetType" AS ENUM ('dog', 'cat', 'parrot');

-- CreateTable
CREATE TABLE "Owner" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Caregiver" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Caregiver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PetType" NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "ownerId" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "caregiverId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("ownerId","caregiverId","petId","date")
);

-- CreateIndex
CREATE UNIQUE INDEX "Owner_email_key" ON "Owner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Caregiver_email_key" ON "Caregiver"("email");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_caregiverId_fkey" FOREIGN KEY ("caregiverId") REFERENCES "Caregiver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
