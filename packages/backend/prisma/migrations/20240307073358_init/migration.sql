-- CreateTable
CREATE TABLE "Users" (
    "userId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Movies" (
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

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("movieId")
);

-- CreateTable
CREATE TABLE "Favorites" (
    "userId" UUID NOT NULL,
    "movieId" UUID NOT NULL,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_password_key" ON "Users"("password");

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movies"("movieId") ON DELETE RESTRICT ON UPDATE CASCADE;
