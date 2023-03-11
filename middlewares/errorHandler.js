const errorHandler = (err, req, res, next) => {
    console.log(err);
    if (err.name === "ErrorNotFound") {
        res.status(404).json({
            massage: "Error Not Found"
        })
    } else {
        Message: "internal server error"
    }
} 

module.exports = errorHandler