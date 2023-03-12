INSERT INTO users (avatar, first_name, last_name, username, email, password)
  VALUES
  ('https://i.imgur.com/LpaY82x.png', 'Mack', 'Martin', 'MM123', 'Mack@gmail.com', '$2b$10$e.bwmNpnkR.N4HZ1SD8SHuSO8y9VxSbPSpJrZudsnQhEGcHn95wL6'),
  ('https://i.imgur.com/LpaY82x.png', 'Jevaughn', 'Williams', 'jevaughn', 'Jevaughn.williamsx@gmail.com' , '$2a$12$E0xlfL9aQOzca.34kndJZ.Ea8E8bOaj0dV9519vLRbZULRco9y3wC'),
  ('https://i.imgur.com/LpaY82x.png', 'Nicholas', 'Dellar-Fernandes', 'Nuttin', 'ndelfern@live.ca', '$2b$10$H3qIu7u3oi374N5iz.k7cOvHd8HQ/IGGDmzjYO84yWDyn.bviEUCm');


INSERT INTO habits (title, body, start_date, end_date, start_time, end_time, days, user_id, completed)
  VALUES
  ('Running', 'I want to run 3 times per week', '2023-03-09', '2023-03-28', '07:00', '08:00', 'Monday,Wednesday' , 2, false),
  ('Coding',  ' Practicing everyday to be a great developer', '2023-04-16', '2023-03-28', '18:00', '22:00', 'Monday,Tuesday' , 1, false ),
  ('Shooting',  'Practicing my basketball shot', '2023-03-16', '2023-04-16', '18:00', '22:00', 'Wednesday,Friday' , 1, false ),
  ('Exercise',  'Work out atleast an hour', '2023-03-15', '2023-04-15', '18:00', '22:00', 'Saturday,Sunday' , 1, false ),
  ('Coding',  ' Practicing everyday to be a great developer', '2023-03-09', '2023-03-28', '23:00', '24:00', 'Thursday,Friday', 3, false );

INSERT INTO events (unique_event_id, habit_id, user_id, completed)
  VALUES
  ( 526, 4, 1, true ),
  ( 40952, 4, 1, false ),
  ( 50016, 3, 1, false ), ( 29088, 3, 1, false ),
  ( 72309, 2, 1, true ),  ( 17616, 4, 1, true ),
  ( 63469, 4, 1, false ), ( 23557, 2, 1, true ),
  ( 18332, 4, 1, false ), ( 56517, 3, 1, false ),
  ( 99149, 2, 1, false ), ( 60507, 3, 1, false ),
  ( 13837, 3, 1, false ), ( 5522, 2, 1, true ),
  ( 38192, 4, 1, false ), ( 95711, 4, 1, true ),
  ( 78536, 2, 1, true ),  ( 75678, 3, 1, true ),
  ( 11581, 4, 1, true ),  ( 75373, 3, 1, true ),
  ( 94146, 3, 1, true ),  ( 70837, 3, 1, true ),
  ( 27863, 2, 1, true ),  ( 67981, 4, 1, false ),
  ( 15027, 2, 1, true ),  ( 46058, 4, 1, true ),
  ( 81327, 2, 1, false ), ( 36853, 3, 1, false ),
  ( 49376, 4, 1, false ), ( 31589, 4, 1, false ),
  ('999', 1, 2, true),
  ('555', 4, 3, false)
