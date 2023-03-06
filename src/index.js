const PORT = process.env.PORT || 8080;
const ENV = require("./environment");
const express = require("express");
const app = express();
const cors = require('cors')
const errorHandler = require('../middleware/errorHandler');

const root = require("./routes/root")
const register = require("./routes/api/register")
const login = require("./routes/api/login")

// Cross Origin Resource Sharing
app.use(cors())


// Built in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }))

// Built-in middleware for json
app.use(express.json());

// app.use(express.static(path.join(__dirname, '/public')))


// routes
app.use("/", root)
app.use("/register", register);
app.use("/login", login)


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
