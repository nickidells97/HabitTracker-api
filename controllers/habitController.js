const router = require("express").Router();
const db = require("../src/db");

const getHabits = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies) {
      return res.sendStatus(401);
    }
    const refreshToken = cookies.jwt;
    const userObject = await db.query(`SELECT * FROM users WHERE refresh_token = $1`, [refreshToken]);
    if (userObject.rows.length === 0) {
      throw new Error('User not found');
    }
    const foundUser = userObject.rows[0];
    const results = await db.query(`SELECT * from habits WHERE user_id = $1`, [foundUser.id]);
    return results.rows;
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
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
      // console.log("RESULTS:", results.rows)
      return results.rows
    });
};

const addEvent = (eventBody) => {
  const { unique_event_id, habit_id } = eventBody
  const queryParams = [unique_event_id, habit_id]
  const queryString = 
    `
      INSERT INTO events 
      (unique_event_id, habit_id)
      VALUES ($1, $2)
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
