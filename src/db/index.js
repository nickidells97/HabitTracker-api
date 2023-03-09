const pg = require("pg");

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || "",
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});
// const pool = new Pool({
//   user: 'development',
//   password: 'development',
//   host: 'localhost',
//   database: 'habit_tracker'
// });



client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
