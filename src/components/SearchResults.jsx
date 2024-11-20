import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const API_KEY = '04c35731a5ee918f014970082a0088b1';
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        const data = await response.json();

        setSearchResults(data.results);
      } catch (error) {
        console.error('That is a Error:', error);
      }
    };

    setSearchResults([]);
    fetchSearchResults();
  }, [query]);

  if (searchResults.length === 0) {
    return <div>
      This Moive is not Found `{query}` !!
    </div>

  }

  return (
    <div className="movieBg">
      <div className="container-fluid row d-flex justify-content-center ">
        {searchResults.map((movie) => (
          <div className="col-md-4 card movieBg m-4  p-3" style={{ width: '18rem' }} key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default SearchResults;
