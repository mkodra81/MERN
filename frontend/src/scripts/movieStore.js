import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL", API_URL);  
export const useMovieStore = create((set) => ({
  selectedMovie:  null,
  trendingMovies: [],
  newReleases: [],
  suggestedMovies: [],
  watchMovie: false,

  setSelectedMovie: (movie) => {
    localStorage.setItem("selectedMovie", JSON.stringify(movie));
    set({ selectedMovie: movie });
  },

  setTrendingMovies: (movies) => set({ trendingMovies: movies }),
  setNewReleases: (movies) => set({ newReleases: movies }),
  setSuggestedMovies: (movies) => set({ suggestedMovies: movies }),
  setWatchMovie: (value) => set({ watchMovie: value }),
}));

export const fetchMoviesBySorting = async (sort) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/movies/sort-by?s=${sort}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching shows:", error);
    throw error;
  }
};

export const fetchMoviesByFilter = async (filter) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/movies/filter-by?f=${filter}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching shows:", error);
    throw error;
  }
};
