import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  const moviesData = require('../src/database/db.json').movies;
  console.log(moviesData);

  for (const movieData of moviesData) {
    await prisma.movies.create({
      data: {
        movieId: movieData.movieId,
        title: movieData.Title,
        year: movieData.Year,
        rated: movieData.Rated,
        released: movieData.Released,
        runtime: movieData.Runtime,
        genre: movieData.Genre,
        director: movieData.Director,
        writer: movieData.Writer,
        actors: movieData.Actors,
        plot: movieData.Plot,
        language: movieData.Language,
        country: movieData.Country,
        awards: movieData.Awards,
        poster: movieData.Poster,
        metascore: movieData.Metascore,
        imdbRating: movieData.imdbRating,
        imdbVotes: movieData.imdbVotes,
        type: movieData.Type,
        dvd: movieData.DVD,
        boxOffice: movieData.BoxOffice,
        production: movieData.Production,
        website: movieData.Website,
        response: movieData.Response,
        favorite: movieData.favorite,
      },
    });
  }

  console.log('Data seeding completed.');
}

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
