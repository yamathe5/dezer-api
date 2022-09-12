const { FetchAlbumsData } = require("../database/albums");
const { FetchAllAlbumsData } = require("../database/albums");
// https://api.deezer.com/album/302121 - 302150
const getAll = async () => {
  const collection = await FetchAllAlbumsData(); // ruta
  // console.log(collection);
  return collection;
};

const getById = async (id) => {
  const collection = await FetchAlbumsData({ id }); // ruta
  return collection;
};

const create = async (body) => {
  const collecion = await FetchAlbumsData(body); // ruta
  // let result = await collecion.insertOne(product);
  return collection;
};

const update = async (id, body) => {
  const collection = await FetchAlbumsData(id, body); // ruta
  console.log(result, id, body);
  return collection;
};

const remove = async (id) => {
  const collecion = await FetchAlbumsData(id);
  return collection;
};

module.exports.AlbumsService = {
  getAll,
  getById,
  create,
  update,
  remove,
};
