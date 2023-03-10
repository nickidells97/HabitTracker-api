INSERT INTO users (avatar, first_name, last_name, username, email, password)
  VALUES
  ('https://i.imgur.com/LpaY82x.png', 'Mack', 'Martin', 'MM123', 'Mack@gmail.com', '$2b$10$e.bwmNpnkR.N4HZ1SD8SHuSO8y9VxSbPSpJrZudsnQhEGcHn95wL6'),
  ('https://i.imgur.com/LpaY82x.png', 'Jevaughn', 'Williams', 'jevaughn.williamsx@gmail.com', 'Jevaughn' , '$2b$10$/3NFY8Db8P08/vQavVnv8eb0uURaAj4wezL3IkhULSRZJH44mGw4y'),
  ('https://i.imgur.com/LpaY82x.png', 'Nicholas', 'Dellar-Fernandes', 'Nuttin', 'ndelfern@live.ca', '$2b$10$H3qIu7u3oi374N5iz.k7cOvHd8HQ/IGGDmzjYO84yWDyn.bviEUCm');


INSERT INTO habits (unique_event_id, title, body, category, start, end, backgroundColor, color, daysSelected, user_id,completed)
  VALUES
  ('running20230309', 'Running', 'I want to run 3 times per week', 'time', '2023-03-22T13:23:00', '2023-03-22T14:23:00', '#1976d2', 'white', 'Monday,Wednesday', 2, false),
  ('coding20230309', 'Coding', 'Practicing everyday to be a great developer', 'time', '2023-03-22T13:23:00', '2023-03-22T14:23:00', '#1976d2', 'white', 'Sunday,Tuesday', 1, false),
  ('running20230309', 'Running', 'I want to run 3 times per week', 'time', '2023-03-22T13:23:00', '2023-03-22T14:23:00', '#1976d2', 'white', 'Thursday,Friday', 3, false),