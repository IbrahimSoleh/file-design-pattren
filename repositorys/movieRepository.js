const Movies = require("../models/movies");

class MovieRepository {
    static findMovies = async (next) => {
       try {
        const data = await Movies.getMovies(next);
        return data;   
       } catch(err) {
        next(err);
       }
    }

    static findMoviesById = async (id, next) => {
        try {
         const data = await Movies.getMoviesById(id, next);
         return data;   
        } catch(err) {
         next(err);
        }
     }

    static createMovie = async (params, next) => {
        try {
         const data = await Movies.createMovie(params, next);
         return data;   
        } catch(err) {
         next(err);
        }
     }

     static updateMovie(params, id, next)  {
        return Movies.updateMovie(params, id, next);
    }

    static updatePhoto = (params, id) => {
        try{
            return Movies.updatePhoto(params, id);
        } catch(err) {
            return err;
        }
    } 

    static deleteMovie = async (id, next) => {
        try {
         return Movies.deleteMovie(id, next); 
        } catch(err) {
         next(err);
        }
     }

}

module.exports = MovieRepository;