const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Определение схемы для пользователя
const userSchema = new Schema({
    firstname: String,
    age: String,
    height: String,
    weight: String
});

// Создание модели User на основе схемы
const User = mongoose.model('User', userSchema);

module.exports = User;
