const express = require("express");
const router = express.Router();
const movieRouter = require("./movies")
const path = require("path");
const multer = require("multer");
const movieController = require("../controllers/movieControllers")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
})
const upload = multer({ storage });

router.use(movieRouter);

router.put("movies/:id/uploads", upload.single("photo"),movieController.updateMovie)
module.exports = router;