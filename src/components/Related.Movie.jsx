




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ relatedMovies }) => {



  return (<>


    <div
      className="related-movie mt-5"
      style={{ width: "100%", height: "auto", padding: "20px" }}
    >
      <h5>Related Movies</h5>
      <div
        className="d-flex flex-wrap"
        style={{
          gap: "20px",
          // justifyContent: "start", 
        }}
      >
        {relatedMovies.map((relatedMovie) => (
          <div
            className="description"
            key={relatedMovie.id}
            style={{
              width: "150px", // Fixed width for each card
              textAlign: "center",
              backgroundColor: "#f9f9f9",
              // borderRadius: "5px", 
              padding: "2px",
              // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link to={`/movie/${relatedMovie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${relatedMovie.poster_path}`}
                alt={relatedMovie.title}
                style={{
                  objectFit: "cover",
                  borderRadius: "5px",
                  width: "100%",
                  height: "200px",
                }} />
            </Link>

            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                // margin: "10px 0 5px",
                minHeight: "40px",

                // overflow: "hidden", 
              }}
            >
              {relatedMovie.title}
            </p>
            <p
              style={{
                // fontSize: "12px",
                // color: "#555",
                // margin: "5px 0",
              }}
            >
              Rating: {relatedMovie.vote_average || "N/A"}
            </p>
            <a
              href="#"
              className="btn2 btn-primary"
              style={{
                // marginTop: "auto", 
                // display: "block",
                textDecoration: "none",
                padding: "10px 5px",
                fontSize: "12px",
              }}
            >
              Release Date: {relatedMovie.release_date || "N/A"}
            </a>
          </div>
        ))}
      </div>
    </div>





  </>
  );
};

export default MovieCard;



