INSERT INTO users (avatar, first_name, last_name, username, email, password)
  VALUES
  ('https://i.imgur.com/LpaY82x.png', 'Mack', 'Martin', 'MM123', 'Mack@gmail.com', '$2b$10$e.bwmNpnkR.N4HZ1SD8SHuSO8y9VxSbPSpJrZudsnQhEGcHn95wL6'),
  ('https://i.imgur.com/LpaY82x.png', 'Jevaughn', 'Williams', 'jevaughn', 'Jevaughn.williamsx@gmail.com' , '$2a$12$E0xlfL9aQOzca.34kndJZ.Ea8E8bOaj0dV9519vLRbZULRco9y3wC'),
  ('https://i.imgur.com/LpaY82x.png', 'Nicholas', 'Dellar-Fernandes', 'Nuttin', 'ndelfern@live.ca', '$2b$10$H3qIu7u3oi374N5iz.k7cOvHd8HQ/IGGDmzjYO84yWDyn.bviEUCm');


INSERT INTO habits (title, body, start_date, end_date, start_time, end_time, days, user_id, completed)
  VALUES
  ('Running', 'I want to run 3 times per week', '2023-03-09', '2023-03-28', '07:00', '08:00', 'Monday,Wednesday' , 2, false),
  ('Coding',  ' Practicing everyday to be a great developer', '2023-03-09', '2023-03-28', '18:00', '22:00', 'Monday,Tuesday' , 1, false ),
  ('Shooting',  'Practicing my basketball shot', '2023-03-09', '2023-03-28', '18:00', '22:00', 'Monday,Tuesday' , 1, false ),
  ('Coding',  ' Practicing everyday to be a great developer', '2023-03-09', '2023-03-28', '23:00', '24:00', 'Thursday,Friday', 3, false );

INSERT INTO events (unique_event_id, habit_id, user_id, completed)
  VALUES
  ('111', 2, 1, true),
  ('123', 2, 1, false),
  ('860', 2, 1, false),
  ('1', 2, 1, false),
  ('2', 3, 1, true),
  ('3', 3, 1, true),
  ('4', 3, 1, true),
  ('5', 3, 1, false),
  ('999', 1, 2, true),
  ('555', 4, 3, false)
