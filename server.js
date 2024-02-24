const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cors = require('cors')

const app = express()
mongoose.set('strictQuery', false)
// Установка конфигурации CORS для разрешения запросов с определенного источника
app.use(cors(
  {
    origin: "http://localhost:4200"
  }
))

app.listen(3000, (error) => {
  if (error) {
    console.log("error");
  } else {
    console.log("started")
  }
});
// Подключение к базе данных MongoDB 
mongoose.connect("mongodb://localhost:27017/users", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB")
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error.message)
  });
// Использование middleware для обработки JSON-данных и маршрутов приложения
app.use(express.json())
app.use(routes)
