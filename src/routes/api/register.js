const router = require("express").Router();
const data = {};
const registerController = require('../../../controllers/registerController')

router.post('/', registerController.handleNewUser)

module.exports = router;