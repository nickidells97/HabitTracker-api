const router = require("express").Router();
const registerController = require('../../../controllers/registerController')



module.exports = (db) => {

  router.get("/", (req,res) => {
    registerController.getUsersByEmail()
      .then(users => res.send(users))
  });

  router.post("/", registerController.handleNewUser);

  return router;
}