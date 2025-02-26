import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  plot: {
    type: String,
  },
  genres: {
    type: Array,
  },
  runtime: {
    type: Object,
  },
  cast: {
    type: Array,
  },
  poster: {
    type: String,
  },
  title: {
    type: String,
  },
  fullplot: {
    type: String,
  },
  languages: {
    type: Array,
  },
  released: {
    type: Object,
  },
  directors: {
    type: Array,
  },
  rated: {
    type: String,
  },
  awards: {
    type: Object,
  },
  lastupdated: {
    type: String,
  },
  year: {
    type: Object,
  },
  imdb: {
    type: Object,
  },
  countries: {
    type: Array,
  },
  type: {
    type: String,
  },
  tomatoes: {
    type: Object,
  },
  num_mflix_comments: {
    type: Object,
  },  

},{collection: "sample_mflix"});

const Movie = mongoose.model("Movie", movieSchema, "movies");
export default Movie;
