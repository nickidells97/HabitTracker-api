const usersDB = {
  users: require("../data/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const {firstName, lastName, user, email, pwd } = req.body;
  if (!user || !pwd || !email)
    return res
      .status(400)
      .json({ message: "Username, email and password are required." });
  //check for duplicate usernames in db
  const duplicate = usersDB.users.find(
    (person) => person.username === user || person.email === email
  );
  if (duplicate) return res.sendStatus(409); // Conflict
  try {
    const hashedPwd = await bcrypt.hash(pwd, 10); //add 10 salt rounds to add security to passwords if database is compromised
    //store the new user
    const newUser = { firstName: firstName, lastName: lastName, username: user, email: email, password: hashedPwd };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "data", "users.json"),
      JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users);
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
