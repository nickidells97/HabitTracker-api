const { google } = require('googleapis')
const { describe } = require('mocha')

const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2('812567341591-7halvdumuj47n8i41344mlmjnt0o4urk.apps.googleusercontent.com', 
'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'
)

oAuth2Client.setCredentials({
  refresh_token:
    '1//04nVweDp7nIkMCgYIARAAGAQSNwF-L9Irxb7ZAqaP6RbNr76TFbVMcubKHKXMJbeSQT0q69LxYf5uQ4_2peBOEsnexn3PKGdqyFQ'
})

const calendar = google.calendar({version: 'v3', auth: oAuth2Client})

// could use form here to send event

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 2)

const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 2)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

const event = {
  summary: 'Drink Water',
  location: null, // set incase you need location
  description: 'Drink 1 litre right away',
  start: {
    dateTime: eventStartTime,
    timeZone: 'America/NYC',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'America/NYC'
  },
  colorId: 1, // different color schemes for events in README
}

