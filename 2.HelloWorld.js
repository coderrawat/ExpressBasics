const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello-World!')
})

app.get('*', (req, res) => {
    res.send('Nothing here!')
})

app.listen(port, () => {
  console.log(`App listening on server port ${port}`)
})