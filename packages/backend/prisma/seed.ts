import { PrismaClient } from '@prisma/client';
import * as db from '../src/database/db.json';
const prisma = new PrismaClient();

type MovieData = {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: { source: string; value: string }[];
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  type: string;
  DVD: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
  favorite: boolean;
};

async function main() {
  // create dummy user
  const user1 = await prisma.user.create({
    data: {
      email: 'evantrujillo30@gmail.com',
      password: 'evan123',
    },
  });

  // create movie data
  const moviesData = db.movies as MovieData[];
  for (const movieData of moviesData) {
    const movie = await prisma.movie.create({
      data: {
        title: movieData.title,
        year: movieData.year,
        rated: movieData.rated,
        released: movieData.released,
        runtime: movieData.runtime,
        genre: movieData.genre,
        director: movieData.director,
        writer: movieData.writer,
        actors: movieData.actors,
        plot: movieData.plot,
        language: movieData.language,
        country: movieData.country,
        awards: movieData.awards,
        poster: movieData.poster,
        metascore: movieData.metascore,
        imdbRating: movieData.imdbRating,
        imdbVotes: movieData.imdbVotes,
        type: movieData.type,
        dvd: movieData.DVD,
        boxOffice: movieData.boxOffice,
        production: movieData.production,
        website: movieData.website,
        response: movieData.response,
        favorite: movieData.favorite,
      },
    });
    // create favorites for dummy user
    if (movieData.title === 'Matilda' || movieData.title === 'Footloose') {
      await prisma.favorite.create({
        data: {
          userId: user1.userId,
          movieId: movie.movieId,
        },
      });
    }
  }

  console.log('Data seeding completed.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
