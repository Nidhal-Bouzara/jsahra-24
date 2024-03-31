/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `isbn` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[isbn10]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[isbn13]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `isbn10` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn13` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BookmarkedBook" DROP CONSTRAINT "BookmarkedBook_bookIsbn_fkey";

-- DropForeignKey
ALTER TABLE "_BookToUser" DROP CONSTRAINT "_BookToUser_A_fkey";

-- DropIndex
DROP INDEX "Book_isbn_key";

-- AlterTable
ALTER TABLE "Book" DROP CONSTRAINT "Book_pkey",
DROP COLUMN "isbn",
ADD COLUMN     "isbn10" TEXT NOT NULL,
ADD COLUMN     "isbn13" TEXT NOT NULL,
ADD CONSTRAINT "Book_pkey" PRIMARY KEY ("isbn10");

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn10_key" ON "Book"("isbn10");

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn13_key" ON "Book"("isbn13");

-- AddForeignKey
ALTER TABLE "BookmarkedBook" ADD CONSTRAINT "BookmarkedBook_bookIsbn_fkey" FOREIGN KEY ("bookIsbn") REFERENCES "Book"("isbn10") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToUser" ADD CONSTRAINT "_BookToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("isbn10") ON DELETE CASCADE ON UPDATE CASCADE;
