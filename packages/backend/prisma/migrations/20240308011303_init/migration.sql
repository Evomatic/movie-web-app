/*
  Warnings:

  - Added the required column `imdbVotes` to the `movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movie" ADD COLUMN     "imdbVotes" TEXT NOT NULL;
