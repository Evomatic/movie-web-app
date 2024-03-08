/*
  Warnings:

  - You are about to drop the `Favorites` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Movies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favorites" DROP CONSTRAINT "Favorites_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Favorites" DROP CONSTRAINT "Favorites_userId_fkey";

-- DropTable
DROP TABLE "Favorites";

-- DropTable
DROP TABLE "Movies";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "users" (
    "userId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "movies" (
    "movieId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "rated" TEXT NOT NULL,
    "released" TEXT NOT NULL,
    "runtime" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "writer" TEXT NOT NULL,
    "actors" TEXT NOT NULL,
    "plot" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "awards" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "ratings" JSONB[],
    "metascore" TEXT NOT NULL,
    "imdbRating" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "dvd" TEXT NOT NULL,
    "boxOffice" TEXT NOT NULL,
    "production" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("movieId")
);

-- CreateTable
CREATE TABLE "favorites" (
    "userId" UUID NOT NULL,
    "movieId" UUID NOT NULL,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_password_key" ON "users"("password");

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("movieId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
