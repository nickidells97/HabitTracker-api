const usersDB = {
  users: require('../data/users.json'),
  setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogin = async (req, res) => {
  const {user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  const foundUser = usersDB.users.find(person => person.username === user);
  if (!foundUser) return res.sendStatus(401); //Unauthorized
  // evaluate password
  const mathPwd = await bcrypt.compare(pwd, foundUser.password);
  if (mathPwd) {
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
    // Saving refreshToken with current user
    const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
    const currentUser = { ...foundUser, refreshToken };
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'data', 'users.json'),
      JSON.stringify(usersDB.users)
    );
    res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000}); //setting max age of cookie and using http only for security
    res.json({ accessToken, "username": foundUser.username });
  } else {
    res.sendStatus(401);
  }
}

module.exports = { handleLogin };