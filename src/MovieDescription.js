import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.title === id);

  if (!movie) {
    return <div>Movie not found</div>; // Handle case when movie isn't found
  }
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default MovieDescription;
