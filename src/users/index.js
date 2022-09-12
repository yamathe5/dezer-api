const express = require("express");

const { UsersController } = require("./controller");

const router = express.Router();

module.exports.UsersAPI = (app) => {
  router
    .get("/", UsersController.getUsers)
    .get("/:id", UsersController.getUser) // http://localhost:3000/api/users/32
    .post("/", UsersController.createUser)
    .delete("/:id", UsersController.deleteUser) // http://localhost:3000/api/users
    .patch("/:id", UsersController.updateUser); // http://localhost:3000/api/users
  app.use("/api/users", router);
};
