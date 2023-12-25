var trenerModel = require('./trenerModel');
var key = '123456rerwefew23423fw';
var encryptor = require('simple-encryptor')(key);

module.exports.createTrenerDBService = async (trenerDetails) => {
    try {
        var trenerModelData = new trenerModel();

        trenerModelData.firstname = trenerDetails.firstname;
        trenerModelData.lastname = trenerDetails.lastname;
        trenerModelData.email = trenerDetails.email;
        trenerModelData.password = encryptor.encrypt(trenerDetails.password);

        await trenerModelData.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports.loginTrenerDBService = async (trenerDetails) => {
    try {
        var result = await trenerModel.findOne({ email: trenerDetails.email });

        if (result) {
            const decrypted = encryptor.decrypt(result.password);

            if (decrypted === trenerDetails.password) {
                return { status: true, msg: "Проверка проведена успешно" };
            } else {
                return { status: false, msg: "Проверка проведена очень очень плоховато" };
            }
        } else {
            return { status: false, msg: "Все плохо" };
        }
    } catch (error) {
        return { status: false, msg: "Всё плохо" };
    }
};
