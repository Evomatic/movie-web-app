import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMovies } from "../../redux/slices/movie.slice";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.moviesReducer.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="homePage">
      <h2>Movie List</h2>
      <div className="movieGrid">
        {data.map((movie) => (
          <div key={movie.movieId} className="movieCard">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
