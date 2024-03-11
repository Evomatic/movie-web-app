import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type MovieData = {
  movieId: string;
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

interface MoviesState {
  isLoading: boolean;
  movies: MovieData[];
  error: boolean;
}

const initialState: MoviesState = {
  isLoading: false,
  movies: [],
  error: false,
};

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const data = await fetch("http://localhost:3000/v1/movies");
  const result = await data.json();
  return result;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const moviesReducer = moviesSlice.reducer;
