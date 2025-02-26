import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SelectedMovie from "./SelectedMovie";
import MovieDesc from "./MovieDesc";

const WatchMovie = ({ movie }) => {
  return (
    <Container className="text-white py-5 px-0 mb-5 w-100 ">
      <Row className="d-flex justify-content-center bg-black my-5">
        <Col md={8}>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/EXeTwQWrcwY"
            title={movie.title}
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
      <Row className="w-100 m-1 glass-background">  
        <MovieDesc movie={movie} />
      </Row>
    </Container>
  );
};

export default WatchMovie;
