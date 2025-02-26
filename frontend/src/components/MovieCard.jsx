import React from "react";
import { Card, Badge } from "react-bootstrap";

const MovieCard = ({ movie }) => {

  return (
    <Card className="border-0 shadow-sm hover-scale" style={{
      height: "490px"
    }}>
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={movie.poster}
          style={{
            maxHeight: "280px"
          }}
        />
        <Badge
          bg="warning"
          text="dark"
          className="position-absolute top-0 end-0 m-2"
        >
          ⭐ {movie.imdb.rating}
        </Badge>
      </div>
      <Card.Body>
        <Card.Title className="h5 mb-2">{movie.title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">

          <span className="text-muted small">{movie.year}</span>
        </div>
        <div className="mt-2">
          {movie.genres.map((genre, index) => (
            <Badge key={index} bg="light" text="dark" className="me-1">
              {genre}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
