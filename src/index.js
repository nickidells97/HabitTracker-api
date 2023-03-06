const PORT = process.env.PORT || 8080;
const ENV = require("./environment");
const express = require("express");
const app = express();
const cors = require('cors')
const errorHandler = require('../middleware/errorHandler');
const verifyJWT = require('../middleware/verifyJWT'); // 
const cookieParser = require('cookie-parser');

const root = require("./routes/root")
const register = require("./routes/api/register")
const login = require("./routes/api/login")
const logout = require("./routes/api/logout")
const refresh = require("./routes/api/refresh")
const user = require("./routes/api/user")
const habit = require("./routes/api/habit")


// Cross Origin Resource Sharing
app.use(cors())


// Built in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }))

// Built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

// Unverified routes
app.use("/", root)
app.use("/register", register);
app.use("/login", login);
app.use("/refresh", refresh);
app.use("/logout", logout);


// Verified routes
app.use(verifyJWT);
app.use("/user", user)
app.use("/habit", habit)
//



app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
