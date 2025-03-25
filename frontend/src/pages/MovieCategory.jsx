import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieStore } from "../scripts/movieStore.js";
import { fetchMoviesByFilter } from "../scripts/movieStore.js";
import RelatedMovies from "../components/RelatedMovies.jsx";

const MovieCategory = () => {
  window.scroll(0, 0)

  const { categoryName } = useParams();

  const suggestions = useMovieStore((state) => state.suggestedMovies);
  const setSuggestions = useMovieStore((state) => state.setSuggestedMovies);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMoviesByFilter(categoryName);
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="d-flex p-5"  style={{
      background: "rgb(33, 37, 41)"
    }}>
      <RelatedMovies
        suggestions={suggestions}
        text={`Sorted movies by genre: ${categoryName}`}
      />
    </div>
  );
};

export default MovieCategory;
