-- CreateEnum
CREATE TYPE "CarType" AS ENUM ('SUV', 'Sedan', 'Hatchback', 'MUV', 'Crossover');

-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid');

-- CreateEnum
CREATE TYPE "Transmission" AS ENUM ('Manual', 'Automatic');

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "type" "CarType" NOT NULL,
    "fuelType" "FuelType" NOT NULL,
    "transmission" "Transmission" NOT NULL,
    "engineCC" INTEGER,
    "powerBhp" DOUBLE PRECISION NOT NULL,
    "torqueNm" DOUBLE PRECISION NOT NULL,
    "mileageCity" DOUBLE PRECISION NOT NULL,
    "mileageHighway" DOUBLE PRECISION NOT NULL,
    "seatingCapacity" INTEGER NOT NULL,
    "bootLitres" INTEGER,
    "groundClearance" INTEGER NOT NULL,
    "priceMin" DOUBLE PRECISION NOT NULL,
    "priceMax" DOUBLE PRECISION NOT NULL,
    "monthlyService" DOUBLE PRECISION NOT NULL,
    "insuranceYear1" DOUBLE PRECISION NOT NULL,
    "safetyRating" DOUBLE PRECISION,
    "depRate1Yr" DOUBLE PRECISION NOT NULL,
    "depRate3Yr" DOUBLE PRECISION NOT NULL,
    "depRate5Yr" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "pros" TEXT[],
    "cons" TEXT[],
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "preferences" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedCar" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedCar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_slug_key" ON "Car"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SavedCar_userId_carId_key" ON "SavedCar"("userId", "carId");

-- AddForeignKey
ALTER TABLE "SavedCar" ADD CONSTRAINT "SavedCar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedCar" ADD CONSTRAINT "SavedCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;
