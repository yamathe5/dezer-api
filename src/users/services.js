const { FetchData } = require("../database/index");

const COLLECTION = "users";

const getAll = async (id = 2529) => {
  const collection = await FetchData({ id }); //ruta
  return collection;
};

const getById = async (id) => {
  const collection = await FetchData({ id }); //ruta
  return collection;
};

const create = async (body) => {
  const collecion = await FetchData(body); //ruta
  // let result = await collecion.insertOne(product);
  return collection;
};

const update = async (id, body) => {
  const collection = await FetchData(id, body); //ruta
  console.log(result, id, body);
  return collection;
};

const remove = async (id) => {
  const collecion = await FetchData(id);
  return collection;
};

module.exports.UsersService = {
  getAll,
  getById,
  create,
  update,
  remove,
};
