const fetch = require("node-fetch");
const debug = require("debug")("app:module-database-albums");
debug.enabled = true;

module.exports.FetchAlbumsData = ({ id, body }) => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(`https://api.deezer.com/album/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          resolve(res);
        });
    } catch (error) {
      reject(error);
    }
  });
};
module.exports.FetchAllAlbumsData = () => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // 302121 - (302150)[(302121, 302122)];
  return Promise.all(
    ids.map(async (id) => {
      try {
        return await fetch(`https://api.deezer.com/album/${id + 302121}`).then(
          (res) => {
            return res.json();
          }
        );
      } catch (error) {
        debug(error);
      }
    })
  ).then((data) => data.filter((result) => (!result.error ? true : false)));
};
