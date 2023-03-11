const router = require("express").Router();
const habitController = require('../../../controllers/habitController')

module.exports = (db) => {

  router.get("/", (req, res) => {
    habitController.getHabits(req, res)
      .then(habits => res.send(habits))
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

  router.get("/events", (req, res) => {
    habitController.getEvents()
      .then(habits => res.send(habits))
  });

  router.post("/events", (req,res) => {

    habitController.addEvent({...req.body})
      .then(event => {
        res.send(event);
      })
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  });
  
  return router
}
