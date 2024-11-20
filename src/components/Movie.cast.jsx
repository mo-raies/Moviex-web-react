import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieCast = ({ movieId }) => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const API_KEY = "04c35731a5ee918f014970082a0088b1";
      const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;




      try {
        const response = await fetch(creditsUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch movie cast");
        }
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCast();
  }, [movieId, id]);

  return (
    <div className="d-flex text-center gap-3 mt-2 justify-content-around">
      {cast.slice(0, 6).map((element) => {
        return (
          <div key={element.id} style={{ marginBottom: "20px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${element.profile_path}`}
              alt={element.name}
              style={{ width: "50px", height: "50px", borderRadius: "200px" }}
            />
            <span className=" d-block  text-center " >{element.name}</span>
          </div>
        );
      })}
    </div >
  );
};

export default MovieCast;
