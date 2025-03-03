import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useMovieStore } from "../movies/movieStore.js";

const Hero = () => {
  const random = Math.floor(Math.random() * 10);

  const movies = useMovieStore((state) => state.trendingMovies);
  const setSelectedMovie = useMovieStore((state) => state.setSelectedMovie);
  const setWatchMovie = useMovieStore((state) => state.setWatchMovie);

  const movie = movies[random];
  useEffect(() => {
    setSelectedMovie(movie);
  }, [movie, setSelectedMovie]);

  const plot =
    movie.fullplot.length > 500
      ? movie.fullplot.slice(0, 200) + "..."
      : movie.fullplot;

  return (
    <div className="position-relative" style={{ height: "100vh" }}>
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `url(${movie.poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="position-absolute w-100 h-100"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
        }}
      >
        <Container className="h-100 d-flex align-items-end">
          <div className="text-white mb-5">
            <span className="badge bg-primary mb-2">Featured</span>
            <h1 className="display-4 fw-bold mb-3">{movie.title}</h1>
            <p className="lead mb-4 w-75 d-none d-sm-block">{plot}</p>
            <div className="d-flex gap-3">
              <Link
                to={`/movie/${movie._id}`}
                onClick={() => setWatchMovie(true)}
              >
                <Button variant="primary" size="lg">
                  <FontAwesomeIcon icon={faPlay} className="me-2" />
                  Watch Now
                </Button>
              </Link>
              <Link to={`/movie/${movie._id}`}>
                <Button variant="outline-light" size="lg">
                  <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                  More Info
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
