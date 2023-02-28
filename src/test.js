// const { google } = require('googleapis')

// const { OAuth2 } = google.auth

// const oAuth2Client = new OAuth2('812567341591-7halvdumuj47n8i41344mlmjnt0o4urk.apps.googleusercontent.com', 
// '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'
// )

// oAuth2Client.setCredentials({
//   refresh_token:
//     '1//04nVweDp7nIkMCgYIARAAGAQSNwF-L9Irxb7ZAqaP6RbNr76TFbVMcubKHKXMJbeSQT0q69LxYf5uQ4_2peBOEsnexn3PKGdqyFQ'
// })

// const calendar = google.calendar({version: 'v3', auth: oAuth2Client})

// //Should use form here to send event

// const eventStartTime = new Date()
// eventStartTime.setDate(eventStartTime.getDay() + 2)

// const eventEndTime = new Date()
// eventEndTime.setDate(eventEndTime.getDay() + 2)
// eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

// const event = {
//   summary: 'Drink Water',
//   location: null, // set incase you need location
//   description: 'Drink 1 litre right away',
//   start: {
//     dateTime: eventStartTime,
//     timeZone: 'America/New_York',
//   },
//   end: {
//     dateTime: eventEndTime,
//     timeZone: 'America/New_York'//Found using this list: https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a
//   },
//   colorId: 1, // different color schemes for events in README
// }

// // This section is for if you want to query the calendar if you are busy or not

// calendar.freebusy.query({
//   resource: {
//     timeMin: eventStartTime,
//     timeMax: eventEndTime,
//     timeZone: 'America/New_York',
//     items: [{ id: 'primary' }], //Array of all calendars the user has access to
//   },
// }, (err, res) => {
//   if(err) return console.error('Free Busy Query Error: ', err)

//   const eventsArr = res.data.calendars.primary.busy

//   if(eventsArr.length === 0) return calendar.events.insert(
//     { calendarId: 'primary', resource: event },
//     err => {
//       if (err) return console.error('Calendar Event Creation Error: ', err)

//       return console.log('Calendar Event Created.')
//     })
//   return console.log(`Sorry I'm busy.`)
// })