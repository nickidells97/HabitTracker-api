const db = require("../src/db");
const jwt = require('jsonwebtoken');
require('dotenv').config();


const handleRefreshToken = (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  if (!cookies)
    return res
      .sendStatus(401);
  const refreshToken = cookies.jwt;
  return db
  .query(`SELECT * FROM users WHERE username = $1`, [user])
  .then((userObject) => {
    const foundUser = userObject.rows[0]
  if (!foundUser) return res.sendStatus(403); //Forbidden
  // evaluate jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
      const accessToken = jwt.sign(
        { "username": decoded.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m'}
      );
      res.json({ accessToken, "user": foundUser.username, "avatar": foundUser.avatar, "id": foundUser.id })
    }
  )
  })
}

module.exports = { handleRefreshToken };