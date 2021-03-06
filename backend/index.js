const connectToMongo = require('./db');
const express = require('express');

connectToMongo();

const app = express();
const port = 5000;//3000 for react app to run

//MiddleWare- COntenBody
app.use(express.json());

//Available Routes
app.use("/api/auth", require('./routes/auth'))
app.use("/api/notes", require('./routes/notes'))

app.get('/nary', (req, res) => {
  res.send('Hello Nary!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})