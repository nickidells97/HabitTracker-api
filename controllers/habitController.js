const router = require("express").Router();
const db = require("../src/db");

const getHabits = () => {
  return db
  .query(
    `
    SELECT * from habits;
    `
    )
    .then((results) => {
      console.log("RESULTS:", results.rows)
      return results.rows
    });
};

const addHabits = (habitBody) => {
  const {unique_event_id, title, body, start, end, backgroundColor, color, daysSelected, user_id, completed} = habitBody
  const queryParams = [unique_event_id, title, body, start, end, backgroundColor, color, daysSelected, user_id, completed]
  const queryString =
    `
      INSERT INTO habits 
      (unique_event_id, title, body, category, start, end, backgroundColor, color, daysSelected, user_id, completed)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
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

module.exports = {
  addHabits,
   getHabits};
