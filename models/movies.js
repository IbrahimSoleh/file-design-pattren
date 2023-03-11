const pool = require("../config/config");

class Movies {
    static getMovies = async (next) => {
        const queryGetMovies = ` SELECT * FROM movies`
       try {
        const data = await pool.query(queryGetMovies)
        return data.rows;
       } catch (err) {
        next(err)
       }
    }

    static getMoviesById = async (id, next) => {
        const queryGetMoviesById = `SELECT * FROM movies WHERE id = $1`
       try {
        const data = await pool.query(queryGetMoviesById, [id]);
        return data.rows;
       } catch (err) {
        next(err)
       }
    }

    static createMovie = async (params, next) => {
        const queryCreateMovie = `INSERT INTO movies (id, title, genres, year) VALUES ($1, $2, $3, $4)
        RETURNING *`
       try {
        const {id, title, genres, year} = params;
        const data = await pool.query(queryCreateMovie, [id, title, genres, year]);
        return data;
       } catch (err) {
        next(err)
       }
    }

    static updateMovie = async (params, id, next) => {
        const title = params.title
        const queryUpdateMovie =  `UPDATE movies SET title = $1 WHERE id= $2 RETURNING *`;
        const data = await pool.query(queryUpdateMovie, [title, id]);
        return data
    }


    static updatePhoto = async (params, id, next) => {
        const photo = params.photo
        const queryUpdatePhoto = `UPDATE movies SET photo = $1 WHERE id= $2 RETURNING *`;
        const data = await pool.query(queryUpdatePhoto, [photo, id]);
        return data;
    }

    static deleteMovie = async (id, next) => {
        try {
        const queryDeleteMovie = `DELETE FROM movies WHERE id = $1`
        const data = await pool.query(queryDeleteMovie, [id]);
        return data;
       } catch (err) {
        next(err)
       }
    }

}

module.exports = Movies;