const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  data = {
        "slackUsername": "Michael Utoh",
        "backend": true,
        "age": 30,
        "bio": "I am a backend developer based in Lagos, Nigeria. I write efficient and scalable APIs using Python (Django and Rest Framework)"
    }

  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})