const addHabit = (db) => {
  const queryParams = []
  const queryString =
    `
      INSERT INTO habits 
      (unique_event_id, title, body, start_date, end_date, start_time, end_time, days, user_id, completed)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `
  
  return db
    .query(queryString, queryParams)
    .then((results) => {
      return results.rows
    })
    .catch((err) => {
      console.log(err.message)
    })
};

module.exports = {addHabit};
