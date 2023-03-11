DROP TABLE IF EXISTS users CASCADE;
-- DROP TABLE IF EXISTS notes CASCADE;
DROP TABLE IF EXISTS habits CASCADE;
DROP TABLE IF EXISTS events CASCADE;
-- DROP TABLE IF EXISTS days_habits CASCADE;
-- DROP TABLE IF EXISTS days CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  avatar VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE habits (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  body VARCHAR(255) NOT NULL,
  start_date VARCHAR(255) NOT NULL,
  end_date VARCHAR(255) NOT NULL, 
  start_time VARCHAR(255) NOT NULL,
  end_time VARCHAR(255) NOT NULL,
  days VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  completed BOOLEAN NOT NULL
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY NOT NULL,
  unique_event_id VARCHAR(255) NOT NULL,
  habit_id INTEGER REFERENCES habits(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
)

-- CREATE TABLE notes (
--   id SERIAL PRIMARY KEY NOT NULL,
--   day_id INTEGER REFERENCES days(id) ON DELETE CASCADE,
--   positive_note VARCHAR(255) NOT NULL,
--   negative_note VARCHAR(255) NOT NULL,
--   habit_id INTEGER REFERENCES habits(id) ON DELETE CASCADE
-- );

-- CREATE TABLE days_habits (
--   id SERIAL PRIMARY KEY NOT NULL,
--   day_id INTEGER REFERENCES days(id) ON DELETE CASCADE,
--   habit_id INTEGER REFERENCES habits(id) ON DELETE CASCADE
-- );