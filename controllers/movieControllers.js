const MovieService = require("../services/moviesService");

class MovieController {
  static findMovies = async (req, res, next) => {
    try {
      const data = await MovieService.findMovies(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static findMovieById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MovieService.findMoviesById(id, next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (req, res, next) => {
    try {
      const data = await MovieService.createMovie(req.body, next);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title } = req.body;
      const data = await MovieService.updateMovie({ title }, id);
      res.status(200).json({
        massage: "masokk",
        data: data.rows[0],
      });
    } catch (err) {}
  };

  static updatePhoto = async (req, res, next) => {
    try {
      const { id } = req.params;
      const imgName = req.file.filename;
      const file = `http://localhost:5000/uploads/${imgName}`;
      const data = await MovieService.updatePhoto({ file }, id);
      res.status(200).json({
        massage: "succesfuly update",
        data: data.rows[0],
      });
    } catch (err) {
      console.log(err);
    }
  };

  static deleteMovie = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MovieService.deleteMovie(id, next);
      if (data) {
        res.status(200).json({
          message: "Delete succesfuly",
          data,
        });
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };

}
module.exports = MovieController;
