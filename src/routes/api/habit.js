const { response } = require("express");

const router = require("express").Router();


module.exports = db => {

  router.get("/", (req, res) => {
    db.query(
      `
      SELECT * from habits;
      `
      )
      .then(({ rows: habits}) => {
        res.json(habits)
        res.send(res.json(habits))
      })
  })
  return router
}
