const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes');
const cors = require('cors')

const app = express()
mongoose.set('strictQuery', false)

app.use(cors(
  {
    origin: "http://localhost:4200"
  }
))

app.listen(3000, (error) => {
  if (error) {
    console.log("error");
  } else {
    console.log("started");
  }
});

mongoose.connect("mongodb://localhost:27017/users", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error.message)
  });

app.use(express.json())
app.use(routes)
