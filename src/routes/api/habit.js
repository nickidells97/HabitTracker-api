const router = require("express").Router();
const habitController = require('../../../controllers/habitController')


module.exports = (db) => {

  router.get("/", (req, res) => {
    habitController.getHabits()
      .then(habits => res.send(habits))
      // .then(res.send("hello"))
    ///Working code
    // db.query(
    //   `
    //   SELECT * from habits;
    //   `
    //   )
    //   .then(({ rows: habits}) => {
    //     res.json(habits)
    //     res.send(res.json(habits))
    //   });
  });

  router.post("/", (req,res) => {

    habitController.addHabits({...req.body})
      .then(habit => {
        res.send(habit);
      })
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  });
  
  return router
}
