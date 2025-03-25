import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
import { useMovieStore } from "../scripts/movieStore.js";

const MovieCarousel = ({ title, movies }) => {
  const setSelectedMovie = useMovieStore((state) => state.setSelectedMovie);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="py-4">
      <h2 className="display-6 mb-4">{title}</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {movies.map((movie) => (
          <div key={movie._id} className="px-2">
            <Link
              to={`/movie/${movie._id}`}
              key={movie.id}
              onClick={() => {
                setSelectedMovie(movie);
              }}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
