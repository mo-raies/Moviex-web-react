import { ImSpinner3 } from "react-icons/im";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCast from "./Movie.cast";
import MovieCard from "./Related.Movie";
import Loading from "./Loadig";

const MoviesDetails = () => {
  const { id } = useParams();
  console.log("Movie ID:", id);

  const [movie, setMovie] = useState(null); // State to store movie details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [relatedMovies, setRelatedMovies] = useState([]); // Related movies state

  const apiKey = "04c35731a5ee918f014970082a0088b1"; // Replace with your actual API key

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);

        // Fetch movie details
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovie(data);

        // Fetch related movies after movie data is loaded
        if (data.genres && data.genres.length > 0) {
          const genreIds = data.genres.map((genre) => genre.id).join(",");
          const relatedMoviesResponse = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreIds}`
          );
          const relatedMoviesData = await relatedMoviesResponse.json();
          setRelatedMovies(relatedMoviesData.results);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="spinner"><Loading /></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      {/* Movie Details Section */}
      <div className="row">
        {/* Movie Poster */}
        <div className="col-12 col-md-4 mb-4">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="img-fluid rounded"
            alt={movie.title}
          />
        </div>

        {/* Movie Info */}
        <div className="col-12 col-md-8">
          <h2 className="mb-3">{movie.title}</h2>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
          <h5>Overview</h5>
          <p>{movie.overview}</p>
          <hr />
          <div className="d-flex flex-wrap gap-3">
            <MovieCast />
          </div>
        </div>
      </div>

      {/* Related Movies Section */}
      <div className="mt-5">
        {/* <h4>Related Movies</h4> */}
        <MovieCard relatedMovies={relatedMovies} />
      </div>
    </div>
  );
};

export default MoviesDetails;
