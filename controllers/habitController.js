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

const addHabits = async (habitBody) => {
  try {
    const {title, body, start_date, end_date, start_time, end_time, days, user_id, completed} = habitBody
    const queryParams = [title, body, start_date, end_date, start_time, end_time, days, user_id, completed]
    const queryString =
      `
        INSERT INTO habits 
        (title, body, start_date, end_date, start_time, end_time, days, user_id, completed)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *
      `
    const results = await db.query(queryString, queryParams);
    return results.rows;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add event"); // throw an error instead of sending 500 status code
  }
};

const getEvents = async (req, res) => {
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
    const results = await db.query(`SELECT * from events WHERE user_id = $1`, [foundUser.id]);
    return results.rows;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add event"); // throw an error instead of sending 500 status code
  }
}

const countUniqueEvents = async (req, res) => {
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
    const results = await db.query(`
    SELECT 
      COUNT(DISTINCT unique_event_id) as event_count, events.completed as event_completed, habits.title from events 
      JOIN habits ON habits.id = habit_id  
      WHERE events.user_id = $1 
      GROUP BY habits.title, events.completed;`, [foundUser.id]);
    return results.rows;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add event"); // throw an error instead of sending 500 status code
  }
}

const addEvent = async (eventBody) => {
  try {
    const { unique_event_id, habit_id, user_id, completed } = eventBody
    const queryParams = [unique_event_id, habit_id, user_id, completed]
    const queryString = 
    `
      INSERT INTO events 
      (unique_event_id, habit_id, user_id, completed)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `
    const results = await db.query(queryString, queryParams);
    return results.rows;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add event"); // throw an error instead of sending 500 status code
  }
};

  const deleteHabit = (habit_id) => {
    const queryParams =[habit_id];
    const queryString = 
    `DELETE FROM habits 
      WHERE id = $1;
    `;

    return db.query(queryString, queryParams)
    .then((results) => {
      console.log("query sucessful");
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

module.exports = {
  addHabits,
  getHabits,
  deleteHabit,
  addEvent,
  getEvents,
  countUniqueEvents
};
