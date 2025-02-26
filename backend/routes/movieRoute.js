import express from "express";
import Movie from "../models/movie.js";

const movieRouter = express.Router();

//Read
movieRouter.get("/sort-by", async (req, res) => {
  const sortField = req.query.s || "imdb.rating"; // Default sorting field

  console.log(`Sorting by: ${sortField}`);

  try {
    const movies = await Movie.aggregate([
      {
        $match: {
          poster: { $ne: null },
          "imdb.rating": { $ne: "" },
          year: { $type: "number" },
          directors: { $ne: null },
          genres: { $ne: null}
        },
      },
      {
        $group: {
          _id: "$title", 
          doc: { $first: "$$ROOT" }, 
        },
      },
      { $replaceRoot: { newRoot: "$doc" } }, // Replace with full document
      { $sort: { [sortField]: -1 } }, // Dynamically sort based on query
      { $limit: 20 }, // Limit to 20 results
    ]);

    res.status(200).json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({success:true, message:"Failed to fetch movies"});
  }
});


movieRouter.get("/filter-by", async (req, res) => {
  const filter = req.query.f;

  try {
    const movies = await Movie.aggregate([
      {
        $match: {
          poster: { $ne: null },
          "imdb.rating": { $ne: "" },
          year: { $type: "number" },
          genres: { $in: [filter] }, 
        },
      },
      {
        $group: {
          _id: "$title", // Group by movie title to remove duplicates
          doc: { $first: "$$ROOT" }, // Keep the first occurrence
        },
      },
      { $replaceRoot: { newRoot: "$doc" } }, // Replace with full document
      { $sort: { "imdb.rating": -1, year: -1 } }, // Sort by IMDb rating and year
      { $limit: 20 }, // Limit to 20 results
    ]);

    res.status(200).json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({success:true, message:"Failed to fetch movies"});
  }
});

export default movieRouter;
