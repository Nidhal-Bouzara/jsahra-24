/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Book` table. All the data in the column will be lost.
  - The primary key for the `BookmarkedBook` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bookId` on the `BookmarkedBook` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[isbn]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `isbn` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookIsbn` to the `BookmarkedBook` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BookmarkedBook" DROP CONSTRAINT "BookmarkedBook_bookId_fkey";

-- DropForeignKey
ALTER TABLE "_BookToUser" DROP CONSTRAINT "_BookToUser_A_fkey";

-- AlterTable
ALTER TABLE "Book" DROP CONSTRAINT "Book_pkey",
DROP COLUMN "id",
ADD COLUMN     "isbn" TEXT NOT NULL,
ADD CONSTRAINT "Book_pkey" PRIMARY KEY ("isbn");

-- AlterTable
ALTER TABLE "BookmarkedBook" DROP CONSTRAINT "BookmarkedBook_pkey",
DROP COLUMN "bookId",
ADD COLUMN     "bookIsbn" TEXT NOT NULL,
ADD CONSTRAINT "BookmarkedBook_pkey" PRIMARY KEY ("userId", "bookIsbn");

-- AlterTable
ALTER TABLE "_BookToUser" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");

-- AddForeignKey
ALTER TABLE "BookmarkedBook" ADD CONSTRAINT "BookmarkedBook_bookIsbn_fkey" FOREIGN KEY ("bookIsbn") REFERENCES "Book"("isbn") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToUser" ADD CONSTRAINT "_BookToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("isbn") ON DELETE CASCADE ON UPDATE CASCADE;
