const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  console.log('Here')
  res.send("Hi")
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
