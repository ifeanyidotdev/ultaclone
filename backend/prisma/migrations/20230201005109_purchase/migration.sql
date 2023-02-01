/*
  Warnings:

  - You are about to drop the column `quantity` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Purchase` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionRef` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_userId_fkey";

-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "quantity",
DROP COLUMN "total",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "transactionId" TEXT NOT NULL,
ADD COLUMN     "transactionRef" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
