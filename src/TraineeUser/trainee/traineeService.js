var traineeModel = require('./traineeModel')
var key = '123456rerwefew23423fw'
var encryptor = require('simple-encryptor')(key)

module.exports.createTraineeDBService = async (traineeDetails) => {
    try {
        var traineeModelData = new traineeModel()
// Заполнение полей записи данными из запроса, шифрование пароля
        traineeModelData.firstname = traineeDetails.firstname
        traineeModelData.lastname = traineeDetails.lastname
        traineeModelData.email = traineeDetails.email
        traineeModelData.password = encryptor.encrypt(traineeDetails.password)
        traineeModelData.role = traineeDetails.role

        await traineeModelData.save();
        return true
    } catch (error) {
        console.log(error)
        return false
    }
};

module.exports.loginTraineeDBService = async (traineeDetails) => {
    try {
        var result = await traineeModel.findOne({ email: traineeDetails.email })

        if (result) {
            const decrypted = encryptor.decrypt(result.password);

            if (decrypted === traineeDetails.password) {
                return { status: true, msg: "Проверка проведена успешно", role: result.role, id: result.id }
            } else {
                return { status: false, msg: "Несовпадает пароль" }
            }
        } else {
            return { status: false, msg: "Все плохо, тренируемый не зашел" }
        }
    } catch (error) {
        return { status: false, msg: "Всё плохо, тренируемого ебут" }
    }
};
