const fetch = require("node-fetch");
const debug = require("debug")("app:module-database-songs");
debug.enabled = true;

module.exports.FetchAllSongsData = () => {
  const ids = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];
  return Promise.all(
    ids.map(async (id) => {
      try {
        return await fetch(
          `https://api.deezer.com/track/${Math.random() * 200 + 3135556}`
        ).then((res) => {
          return res.json();
        });
      } catch (error) {
        debug(error);
      }
    })
  ).then((data) => data.filter((result) => (!result.error ? true : false)));
};
