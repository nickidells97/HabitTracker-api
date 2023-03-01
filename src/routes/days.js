const router = require("express").Router();

module.exports = db => {
  router.get("/days", (request, response) => {
    db.query(
      `
      SELECT * FROM days;
    `
    ).then(({ rows: days }) => {
      response.json(days);
    });
  });

  return router;
};
