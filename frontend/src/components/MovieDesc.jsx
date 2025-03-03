import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useMovieStore } from "../movies/movieStore.js";

const MovieDesc = ({ movie }) => {

  const setWatchMovie = useMovieStore((state) => state.setWatchMovie);

  window.addEventListener("popstate", () => {
    setWatchMovie(false);
  });

  const plot =
  movie.fullplot.length > 330
    ? movie.fullplot.slice(0, 330) + "..."
    : movie.fullplot;

  return (
    <Container className="py-5 mt-5 lg-bg-transparent w-100 h-100"> 
    <Row className="h-100 w-100"> 
      <Col className="d-none d-sm-block mx-5" xl={4}>
        <img
          style={{ maxHeight: "90vh", width: "auto" }}
          src={movie.poster}
          alt={`${movie.title} Movie Poster`}
        />
      </Col>

      <Col className="h-100 w-100">
        <div className="h-100 w-100">
          <h1 className="display-3 mb-3">{movie.title}</h1>

          <div className="d-flex mb-4">
            <Button variant="primary" className="me-sm-3 mb-3 mb-sm-0" onClick={() => setWatchMovie(true)}>
              <FontAwesomeIcon icon={faPlay} className="me-2" />
              Watch now
            </Button>
          </div>

          <p className="mb-4">{plot}</p>

          <Row >
            <Col xs={12} md={6}>
              <p>
                <strong>Released:</strong> {movie.year}
              </p>
              <p>
                <strong>Duration:</strong> {movie.runtime} min
              </p>
              <p>
                <strong>Genre:</strong> {movie.genres.join(", ")}
              </p>
            </Col>
            <Col xs={12} md={6}>
              <p>
                <strong>Production:</strong> {movie.directors}
              </p>
              <p>
                <strong>Cast:</strong> {movie.cast.join(", ")}
              </p>
            </Col>
          </Row>

          {/* IMDb Rating */}
            <div className="d-flex mt-4">
              <div className="border border-1 border-light px-2 py-1 px-md-3 py-md-2 rounded">
                <span className="mb-0">
                  Rating: {movie.imdb.rating}
                </span>
              </div>
            </div>
        </div>
      </Col>
    </Row>
  </Container>
);
};

export default MovieDesc;