const express = require("express");
const app = express();
const port = 5000;
const errorHandler = require("./middlewares/errorHandler")
const routes = require("./routes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(errorHandler);

app.listen(port);
