const router = require("express").Router();
const loginController = require('../../../controllers/loginController')

module.exports = (db) => {

router.post('/', loginController.handleLogin)

return router;
}