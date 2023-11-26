import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieDescription from "./MovieDescription";

function MovieCard({ posterURL, title, description, rating, trailerLink, id }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    width: "200px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "250px",
  };

  return (
    <div>
      <Link to={`/movie/${title}`}>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src={posterURL}
            style={imageStyle}
            alt="NO MOVIE POSTER"
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <p>Rating: {rating}</p>
            <a href={trailerLink} target="_blank" rel="noopener noreferrer" />
            Watch Trailer
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default MovieCard;
