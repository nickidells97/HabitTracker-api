const usersDB = {
  users: require('../data/users.json'),
  setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');


const handleLogout = async (req, res) => {
  //On client, also delete the access token on the front end
  const cookies = req.cookies;
  if (!cookies)
    return res
      .sendStatus(204); // No content to send back
  const refreshToken = cookies.jwt;
  // Is refresh token in DB
  const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    return res.sendStatus(204); 
  }
  // Delete refreshToken in DB
  const otherUsers = usersDB.users.filter(person => person.refreshToken !== foundUser.refreshToken);
  const currentUser = {...foundUser, refreshToken: ''};
  usersDB.setUsers([...otherUsers, currentUser]);
  await fsPromises.writeFile(
    path.join(__dirname, '..', 'data', 'users.json'),
    JSON.stringify(usersDB.users)
  );

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); //secure: true - does not work in thunder client but necessary for use in chrome
  res.sendStatus(204)
}

module.exports = { handleLogout };