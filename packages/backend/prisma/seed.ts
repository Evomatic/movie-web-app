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
  const moviesData = db.movies as MovieData[];
  for (const movieData of moviesData) {
    await prisma.movie.create({
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
