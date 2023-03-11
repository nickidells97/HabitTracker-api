const db = require("../src/db");
const bcrypt = require("bcrypt");

const getUsersByEmail = () => {
  return db
  .query(
    `
    SELECT email from users;
    `
    )
    .then((results) => {
      console.log(results.rows);
      return results.rows
    });
};


const handleNewUser = async (req, res) => {
  const {firstName, lastName, user, email, pwd } = req.body;
  // console.log(req.body)
  if (!user || !pwd || !email)
    return res
      .status(400)
      .json({ message: "Username, email and password are required." });

  const avatar = 'https://i.imgur.com/LpaY82x.png'; //This needs to be dynamic field
  //check for duplicate usernames in db
  
  //Hash password
    const hashedPwd = bcrypt.hashSync(pwd, 10); //add 10 salt rounds to add security to passwords if database is compromised
    //store the new user
    // const newUser = { firstName: firstName, lastName: lastName, username: user, email: email, password: hashedPwd };
    res.status(201).json({ success: `New user ${user} created!` });
    const queryParams = [avatar, firstName, lastName, user, email, hashedPwd];
    const queryString =
    `
      INSERT INTO users 
      (avatar, first_name, last_name, username, email, password)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `
    return db.query(queryString, queryParams)
    .then((results) => {
      return results.rows
    })
    .catch((err) => {
      console.log(err.message)
    })
};

module.exports = { handleNewUser, getUsersByEmail };

// usersDB.setUsers([...usersDB.users, newUser]);
// await fsPromises.writeFile(
//   path.join(__dirname, "..", "data", "users.json"),
//   JSON.stringify(usersDB.users)
// );
// console.log(usersDB.users);
// res.status(201).json({ success: `New user ${user} created!` });
