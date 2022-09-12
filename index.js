const express = require("express");
const fetch = require("node-fetch");
const debug = require("debug")("app:main");
debug.enabled = true;
const cors = require("cors");

const { UsersAPI } = require("./src/users/index");
const { AlbumsAPI } = require("./src/albums/index");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;

UsersAPI(app);
AlbumsAPI(app);

app.listen(PORT, () => {
  console.log("server listeneing on port 4000");
});
