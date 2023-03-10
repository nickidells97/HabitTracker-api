const db = require("../src/db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async (req, res) => {
  const {user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  return db
  .query(`SELECT * FROM users WHERE username = $1`, [user])
  .then((username) => {
    const foundUser = username.rows[0]
    if (!username) {
      return res.sendStatus(401); //Unauthorized
    } else {
      // evaluate password
      const validPassword = bcrypt.compareSync(pwd, username.rows[0].password)
      if (validPassword) {
        //create JWTs
    const accessToken = jwt.sign(
      { "username": foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15m'}
    );
    const refreshToken = jwt.sign(
      { "username": foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '4d'}
    );
    const queryParams = [user, refreshToken];
    const queryString =
    `
      UPDATE users
      SET refresh_token = $2
      WHERE username = $1
      RETURNING *
    `
    return db.query(queryString, queryParams)
    .then((results) => {
      res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000}); //setting max age of cookie and using http only for security
      res.json({ accessToken, "user": foundUser.username, "avatar": foundUser.avatar, "id": foundUser.id });
      return results.rows
    })
    .catch((err) => {
      console.log(err.message)
    })
    
    
      } else {
        res.sendStatus(401);
      }
    }
  })
}
module.exports = { handleLogin };