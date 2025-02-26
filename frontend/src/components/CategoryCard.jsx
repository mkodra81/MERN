import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryCard = ({ category }) => {
  return (
    <Card className="h-100 border-0 shadow-sm hover-scale">
      <Card.Body className="text-center">
        <Link to={`/category/${category.name}`} className="text-decoration-none text-reset">
          <div className="category-icon mb-3">
            <FontAwesomeIcon icon={category.icon} size="2x" />
          </div>
          <h3 className="h5 mb-2">{category.name}</h3>
          <p className="text-muted small mb-0">{category.movieCount} movies</p>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
