import React, { useEffect, useState } from "react";
import SelectedMovie from "../components/SelectedMovie";
import RelatedMovies from "../components/RelatedMovies";
import Comments from "../components/Comments";
import { fetchMoviesByFilter } from "../movies/movieStore.js";
import "../styles/selected-movie.css";
import WatchMovie from "../components/WatchMovie.jsx";
import { useUserStore } from "../movies/userStore.js";
import { useMovieStore } from "../movies/movieStore.js";

const MovieDetails = () => {
  window.scrollTo(0, 0);

  const movie = useMovieStore((state) => state.selectedMovie);
  const suggestions = useMovieStore((state) => state.suggestedMovies);
  const setSuggestions = useMovieStore((state) => state.setSuggestedMovies);
  const watchMovie = useMovieStore((state) => state.watchMovie);

  const user = useUserStore((state) => state.user);
  
  const movieGenres = movie.genres.map((genre) => {
    return genre;
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMoviesByFilter(movieGenres[0]);
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);


  return (
    <div style={{
      background: "rgb(33, 37, 41)"
    }}>
      {watchMovie ? (
        <WatchMovie movie={movie} />
      ) : (
        <SelectedMovie movie={movie} />
      )}
      <RelatedMovies suggestions={suggestions} text={`Related Movies sorted by genre: ${movieGenres[0]}`}/>
      <Comments movieId={movie._id} user={user}  />
    </div>
  );
};

export default MovieDetails;
