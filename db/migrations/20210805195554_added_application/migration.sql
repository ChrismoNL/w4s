-- CreateEnum
CREATE TYPE "Industry" AS ENUM ('ANIMALS', 'BEAUTY', 'BUILDING_MATERIALS', 'CHILDREN_BABIES', 'CLOTHING', 'COMPUTER', 'COUPONS_TICKETS', 'ELECTRONICS', 'EROTIC', 'HOBBIES_LEISURE', 'HOME_DECOR', 'MULTIMEDIA', 'MUSIC', 'NUTRITION', 'OTHER', 'SOFTWARE', 'SPORTS', 'TELECOM', 'VEHICLES');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('ASSETS', 'OTHER', 'SHARES');

-- CreateEnum
CREATE TYPE "OrderProcessingType" AS ENUM ('COMBINATION', 'DIFFERENT', 'DROPSHIPPING', 'FULFILLMENT', 'IN_HOUSE');

-- CreateEnum
CREATE TYPE "PlatformType" AS ENUM ('CCV_SHOP', 'CUSTOM_APPLICATION', 'LIGHTSPEED', 'MAGENTO', 'OTHER', 'PRESTASHOP', 'SHOPIFY', 'WOO_COMMERCE');

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "industry" "Industry" NOT NULL,
    "askingPrice" MONEY NOT NULL,
    "annualTurnover" MONEY NOT NULL,
    "annualProfit" MONEY NOT NULL,
    "monthlyVisitors" INTEGER NOT NULL,
    "monthlyPageViews" INTEGER NOT NULL,
    "transactionType" "TransactionType" NOT NULL,
    "orderProcessingType" "OrderProcessingType" NOT NULL,
    "stockValue" MONEY NOT NULL,
    "stockIncluded" BOOLEAN NOT NULL DEFAULT false,
    "weeklyCommitment" INTEGER NOT NULL,
    "existSince" TIMESTAMP(3) NOT NULL,
    "platformType" "PlatformType" NOT NULL,

    PRIMARY KEY ("id")
);
