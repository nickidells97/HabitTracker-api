const { response } = require("express");

const router = require("express").Router();


// module.exports = db => {

  router.get("/", (req, res) => {
    // db.query(
    //   `
    //   SELECT * from habits;
    //   `
    // )
    //   .then(({ rows: habits}) => {
    //     response.json(habits)
    //   })
    res.send("Hello World")
  })
// }

module.exports = router;