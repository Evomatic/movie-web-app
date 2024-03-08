/*
  Warnings:

  - You are about to drop the `favorites` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_movieId_fkey";

-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_userId_fkey";

-- DropTable
DROP TABLE "favorites";

-- DropTable
DROP TABLE "movies";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "user" (
    "userId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "movie" (
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

    CONSTRAINT "movie_pkey" PRIMARY KEY ("movieId")
);

-- CreateTable
CREATE TABLE "favorite" (
    "userId" UUID NOT NULL,
    "movieId" UUID NOT NULL,

    CONSTRAINT "favorite_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_password_key" ON "user"("password");

-- AddForeignKey
ALTER TABLE "favorite" ADD CONSTRAINT "favorite_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movie"("movieId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite" ADD CONSTRAINT "favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
