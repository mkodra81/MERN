import React from "react";
import MovieDesc from "./MovieDesc";

const SelectedMovie = ({ movie }) => {

  return (
    <div
      className="position-relative text-white mb-5"
      style={{
        backgroundImage: `url(${movie.poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "140vh",
      }}
    >
      <div
        className="position-absolute w-100 h-100 pt-5"
        style={{
          background:
            "linear-gradient(0deg, rgb(33, 37, 41) 50%, transparent 100%)",
        }}
      >
        <MovieDesc movie={movie} />
      </div>
      
    </div>
  );
};

export default SelectedMovie;
