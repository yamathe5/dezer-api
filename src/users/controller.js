const createError = require("http-errors");
const debug = require("debug")("app:mopudle-users-controller");
debug.enabled = true;

const { UsersService } = require("./services");
const { Response } = require("../common/response");

module.exports.UsersController = {
  getUsers: async (req, res) => {
    try {
      let users = await UsersService.getAll();
      Response.success(res, 200, "Lista de usuarios", users);
      // res.json(products); comentamos esto xq reesponse.succes ya lo implementa
    } catch (error) {
      debug(error);
      Response.error(res);
      // res.status(500).json({ message: "internal server error" });
    }
  },
  getUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let user = await UsersService.getById(id);
      if (!user) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `User: ${id}`, user);
        // res.json(product);
      }
    } catch (error) {
      debug("error");
      Response.error(res);
      // res.status(500).json({ message: "internal server error" });
    }
  },
  createUser: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await UsersService.create(body);
        Response.success(res, 201, "Usuario agregado", insertedId); // res.json(insertedId);
      }
    } catch (error) {
      debug("error");
      Response.error(res); // res.status(500).json({ message: "internal server error" });
    }
  },

  updateUser: async (req, res) => {
    try {
      let id = req.params.id;
      let body = req.body;
      let updatedUser = await UsersService.update(id, body);
      Response.success(res, 200, "User actualizado", updatedUser);
    } catch (error) {
      debug(error);
      Response.error(res, new createError.BadRequest());
    }
  },

  deleteUser: async (req, res) => {
    try {
      let id = req.params.id;
      let response = await UsersService.remove(id);
      if (response.deletedCount === 1) {
        debug("Se elimino 1 usuario");
        Response.success(res, 200, "Usuario eliminado", response);
      } else {
        Response.error(res, new createError.NotFound());
      }
    } catch (error) {
      debug("error");
      Response.error(res);
    }
  },
};
