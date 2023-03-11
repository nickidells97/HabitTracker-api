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
  const {title, body, start_date, end_date, start_time, end_time, days, user_id, completed} = habitBody
  const queryParams = [title, body, start_date, end_date, start_time, end_time, days, user_id, completed]
  const queryString =
    `
      INSERT INTO habits 
      (title, body, start_date, end_date, start_time, end_time, days, user_id, completed)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
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

const getEvents = () => {
  return db
  .query(
    `
    SELECT * from events;
    `
    )
    .then((results) => {
      console.log("RESULTS:", results.rows)
      return results.rows
    });
};

const addEvent = (eventBody) => {
  const { unique_event_id, habit_id, user_id, completed } = eventBody
  const queryParams = [unique_event_id, habit_id, user_id, completed]
  const queryString = 
    `
      INSERT INTO events 
      (unique_event_id, habit_id, user_id, completed)
      VALUES ($1, $2, $3, $4)
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
  getHabits,
  addEvent,
  getEvents
};
