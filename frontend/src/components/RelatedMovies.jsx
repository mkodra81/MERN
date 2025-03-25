import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { useMovieStore } from "../scripts/movieStore.js";

const RelatedMovies = ({ suggestions, text }) => {
  const setSelectedMovie = useMovieStore((state) => state.setSelectedMovie);
  const setWatchMovie = useMovieStore((state) => state.setWatchMovie);

  return (
      <Container className="py-5 text-white">
        <h2 className="display-6 mb-4">{text}</h2>
        <Row>
          {suggestions.map((movie) => (
            <Col
              key={movie._id}
              xs={6}
              lg={3}
              className="px-2 mb-4"
            >
              <Link
                to={`/movie/${movie._id}`}
                onClick={() => {
                  setSelectedMovie(movie);
                  setWatchMovie(false);
                }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MovieCard movie={movie} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
  );
};

export default RelatedMovies;
