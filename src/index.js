const express = require('express')
var cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080;

app.use(cors())

app.get('/', (req, res) => {
  data = {
        "slackUsername": "Michael Utoh",
        "backend": true,
        "age": 30,
        "bio": "I am a backend developer based in Lagos, Nigeria. I love building REST APIs using Python"
    }

  res.send(data)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})