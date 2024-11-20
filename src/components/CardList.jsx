import { useEffect, useState } from "react";
import Card from "../components/Card";


const CardList = ({ genresId }) => {

  const [movies, setmovies] = useState([]);
  const [page, setPage] = useState(1);

  const nextPageHandle = () => {
    setPage((Page) => Page + 1);
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  const previewPageHandle = () => {
    if (page > 1)
      setPage(page - 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  const getmovies = () => {

    const api = `https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=${genresId}&page=${page}`
    fetch(api)
      .then((Response => {
        return Response.json()
      }))
      .then(data => setmovies(data.results))
  }

  useEffect(() => {
    getmovies()
  }, [genresId, page])



  return (
    <>
      <div className="card-list">
        {movies.map((movie) => <Card key={movie.id}
          title={movie.title}
          id={movie.id}
          vote_average={movie.vote_average}
          releaseDate={movie.release_date}

          posterPath={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ""}
          movies={movies} />)}

      </div>
      <div className="d-flex justify-content-center " style={{ gap: '20px' }} >
        <button type="button" class="btn btn-secondary mt-5" onClick={previewPageHandle}>Preview</button>

        <button type="button" class="btn btn-secondary mt-5" onClick={nextPageHandle}>Next</button>


      </div>
    </>
  )
}
export default CardList;