var traineeModel = require('../trainee/traineeModel')

exports.saveUserSettingsDBService = async (userId, userData) => {
    try {
        const user = await traineeModel.findByIdAndUpdate(userId, userData, { new: true });
        return user ? true : false;
    } catch (error) {
        console.error('Ошибка при сохранении настроек', error);
        return false;
    }
};
