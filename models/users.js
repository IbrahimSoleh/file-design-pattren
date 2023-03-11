const pool = require("../config/config");

class Users {
    static getUsers = async (next) => {
        const queryGetUsers = ` SELECT * FROM user`
       try {
        const data = await pool.query(queryGetUsers)
        return data.rows;
       } catch (err) {
        next(err)
       }
    }

    static getUsersById = async (id, next) => {
        const queryGetUsersById = `SELECT * FROM user WHERE id = $1`
       try {
        const data = await pool.query(queryGetUsersById, [id]);
        return data.rows;
       } catch (err) {
        next(err)
       }
    }

    static createUser = async (params, next) => {
        const queryCreateUser = `INSERT INTO user (id, title, genres, year) VALUES ($1, $2, $3, $4)
        RETURNING *`
       try {
        const {id, title, genres, year} = params
        const data = await pool.query(queryCreateUser, [id, title, genres, year]);
        return data;
       } catch (err) {
        next(err)
       }
    }
}

module.exports = Users