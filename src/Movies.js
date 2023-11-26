import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Adding from "./Adding";

const Movies = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who enters the dreams of others to steal their secrets.",
      posterURL:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg",
      rating: "7",
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      rating: "6",
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker emerges, Batman must confront one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: "3",
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: "1",
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Forrest Gump",
      description:
        "The story of a man with a low IQ who accomplished great things in his life.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      rating: "2",
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const addToMovies = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (!filterRating || parseFloat(movie.rating) >= parseFloat(filterRating))
    );
  });

  return (
    <div>
      <Adding addToMovies={addToMovies} />
      <div>
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by rating"
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
        />
      </div>
      <div style={{ display: "grid", gap: "50px" }}>
        {filteredMovies.map((film, index) => (
          <MovieCard key={index} {...film} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
