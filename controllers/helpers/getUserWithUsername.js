const db = require("../../src/db");

const getUserWithUsername = function(user) {
  return db
    .query(`SELECT * FROM users WHERE username = $1`, [user])
    .then((username) => {
      if (!username) {
        return res.sendStatus(401); //Unauthorized
      }
      return Promise.resolve(username.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = getUserWithUsername;