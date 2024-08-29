import express from 'express'
const app = express()
const port = 3000

const db = {
  users: [
    {
      username: '',
      password: '',
      uniqueID: 0,
      firstName: '',
      lastName: '',
    }
  ]
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})