const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const db_connection = require("./config/db_connection");
db_connection();

const post = require("./routers/post");
app.use("/api/post", post);
const user = require("./routers/user");
app.use("/api/user", user);

app.listen(process.env.PORT, () => {
  console.log("Connected to port", process.env.PORT);
});
