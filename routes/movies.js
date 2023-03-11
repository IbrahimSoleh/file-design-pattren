const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieControllers");

// movies
router.get("/movies", movieController.findMovies);
router.get("/movies/:id", movieController.findMovieById);
router.post("/movies", movieController.createMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);
module.exports = router;