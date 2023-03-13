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

  router.post("/Edit", (req,res) => {
    habitController.editHabits({...req.body})
      .then(habit => {
        res.send(habit);
      })
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  });

  router.get("/events", (req, res) => {
    habitController.getEvents(req, res)
      .then(events => res.send(events))
  });

  router.get("/events/count", (req, res) => {
    habitController.countUniqueEvents(req, res)
      .then(events => res.send(events))
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

  router.delete("/:id", (req, res) => {
    habitController.deleteHabit(req.params.id)
      .then(event => {
        res.send(event);
        // res.status(204).json({});
        console.log("request body", req.body);
      });
  })
  
  return router
}
