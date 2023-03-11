const  MovieRepository = require("../repositorys/movieRepository")
class MovieService {
 static findMovies = async (next) => {
   try{
    const data = await MovieRepository.findMovies(next);
   return data;
   } catch(err) {
    next(err)
   }
 }
 static findMoviesById = async (id, next) => {
    try{
     const data = await MovieRepository.findMoviesById(id, next);
    return data;
    } catch(err) {
     next(err)
    }
  }

 static createMovie = async (params, next) => {
    try{
     const data = await MovieRepository.createMovie(params, next);
    return data;
    } catch(err) {
     next(err)
    }
  }

  static async updateMovie(params, id, next) {
    return MovieRepository.updateMovie(params, id, next);
}
  static async updatePhoto(params, id, next) {
    return MovieRepository.updatePhoto(params, id, next);
}

 static deleteMovie = async (id, next) => {
    try{
     return MovieRepository.deleteMovie(id, next);
    } catch(err) {
     next(err)
    }
  }

// static async delete(id) {
//   return movieRepository.delete(id);
// }
}
module.exports = MovieService;