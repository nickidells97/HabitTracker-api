const PORT = process.env.PORT || 8080;
const ENV = require("./environment");
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("../middleware/errorHandler");
const verifyJWT = require("../middleware/verifyJWT"); //
const cookieParser = require("cookie-parser");
const credentials = require("../middleware/credentials");

//access db, setup under db/index.js
const db = require("./db");

const root = require("./routes/root");
const register = require("./routes/api/register");
const login = require("./routes/api/login");
const logout = require("./routes/api/logout");
const refresh = require("./routes/api/refresh");
const user = require("./routes/api/user");
const habit = require("./routes/api/habit");

// handle options credentials check -before CORS!
// also fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Built in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// Built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

// Unverified routes
app.use("/", root);
app.use("/register", register(db));
app.use("/login", login(db));
app.use("/refresh", refresh);
app.use("/logout", logout);

// Verified routes
app.use(verifyJWT);
app.use("/user", user);
//access db (line12) as a parameter in habit route
app.use("/habit", habit(db));
//

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
