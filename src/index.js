const express = require('express');
const { google } = require('googleapis');

const app = express();
const port = 8080;

const SCOPES = 'https://www.googleapis.com/auth/calendar.events';
const GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5rVchjJOhYCeC\nOcyM/b+cGC179qSj2dZLTByhhZY9H/A/sdEXwMYL7wzjkJsGJUnekKYxgwlc4AWk\n/9aVEZn5iAOHGOy9m+5jt3pABF02Kvf14g5zTLbtypwzqJI4iQild1E0huTlI0Bi\ncU4KMPmqZCV7SooQ7tYOecbCCP8GpZqG9Q7mJEmMZR+X4g7ww/KiyeezqG9ZQKXS\nL1tkLl1tEgkd42qqV/yOz7Pcs3ZO5rwegNOxANqum+DFrgmBv2XYrdgiJRMWxAsK\nu9A6YblBMucDKiETqzrJ1eEIgMDN1nmymH9+XiGDGj5onvEduzLqq135k6j0KXK0\nYgxc2BbRAgMBAAECggEAWkJLIsHlWgMV8ZYLO1Z2eHjAU4xYCFZyd3PuTw5TNC98\naFoWHIfXPiHckBrRYTFrMUf7ogHi4UT9OXIsa5Z81PIrVNbm7l0Ii2y7frcgYJ6O\nnvZes+nM2tctC2ecfOMQUu8niHMyfbifKbuOhiG8m/nGxqI7b3PKlorX9abN4fp2\nD4tfUgB8RDh7zeCVXJSokcqBrPYqPCsi29vVEn04ak+VHj2XOgeVG38WGNVV1X87\n4NaqWSHi6zhlcdK/xnBG5hoB277zA8r/2tT95N3Pc/jePbLFO3MAKR9TFVZ4K4nE\nIncW1n5Fa51q52yyjufiwjEjiF9rYhq4CVFp1ivTCQKBgQDq4t4OSKGKtHNT5IqH\nOF9Uzj70lja229u8q78mqokuGbcf9fUH6+85j8tkRjARQCA045R5oG4jTOXRN3f7\nqwNmPMTOr7ssNtGLaHCUxtMQbH17tlUjRScuxJFyEesOkewiAHWgxa8XtMUXMHVC\ne6tiUZdc139Tck4f0KJFSxeafwKBgQDKXhZ3EN9ILu6504u0Kgh8iv3lYNk+EmmY\nZl1McaCY5t+uNTNNxhW2SojOW/AYhPixHIcsYCgI1pp2AiXn1jABrd7pjB8NNwmg\nxj0VaWcOpPlqSHfydWYDRtvGf5SLBRzbepFdrA8Qq1rOXtFKQTqAwUoWLKWOb4jc\nWOnX0amGrwKBgG6GLiLeflT8MEBLi/uwxPrsyabhgAFvVuhikGGrYT12EDtTyubd\nWAXn6bbXaArV99GrPNQ2b1zg9EsMJMMhZ0oWUi1Hd3WInfVRQZhgLjTOOAWceFdO\nVO+mwyG/2LFUbJ5bRP5PxuIKx6rvvF16P9zVs7mWFW24nZZO3+xnN0YVAoGAen0A\ntAjuXU6rCKdXBDH8+QVYMKKyW7PhXnF3P3H3dxUnhtaEuyqOscvjiqRzayPxM6LE\n3sNE+DSNQaiDMRSf8iQ/rLU3hlQt67aR+ofV7TNGFGLQ11zf5lPZawiF7K+ni+Fg\nY4Zlh/1v9UHHBF7+/jgAk/NqMhCoklbvE8bACdkCgYEAl4SbDSl1rezpBvtDz38c\nOTzp/cbauQcUULIUhiPbioZpbtC2hsuovND3xzsSrNr2Q/1/woCtbCW+/5rwmkhP\naSwiBQFJH7uYjMZwRiFbjnjRS5ATXvEdK14nzva2qkKYuD3IBDOH/OF/d4vgdK6F\nVmsoypR7IzHuVPAOnqsQexs=\n-----END PRIVATE KEY-----\n"
const GOOGLE_CLIENT_EMAIL = "habit-tracker@habtrack.iam.gserviceaccount.com"
const GOOGLE_PROJECT_NUMBER = "812567341591"
const GOOGLE_CALENDAR_ID = "habittracktest@gmail.com"

app.get('/', (req, res) => {
  const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES
  );

  const calendar = google.calendar({
    version: 'v3',
    project: GOOGLE_PROJECT_NUMBER,
    auth: jwtClient
  });

  calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (error, result) => {
    if (error) {
      res.send(JSON.stringify({ error: error }));
    } else {
      if (result.data.items.length) {
        res.send(JSON.stringify({ events: result.data.items }));
      } else {
        res.send(JSON.stringify({ message: 'No upcoming events found.' }));
      }
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));