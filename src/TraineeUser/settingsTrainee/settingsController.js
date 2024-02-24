const settingsService = require('./settingsService');
// Определение асинхронной функции для сохранения настроек пользователя
var saveUserSettings = async (req, res) => {
    const userData = req.body;
    const userId = req.params.id;

    try {
        const status = await settingsService.saveUserSettingsDBService(userId, userData);
        if (status) {
            console.log('Настройки пользователя обновлены успешно');
            res.status(200).send('Настройки пользователя обновлены успешно');
        } else {
            console.log('Пользователь не найден');
            res.status(404).send('Пользователь не найден');
        }
    } catch (error) {
        console.error('Ошибка при сохранении настроек', error);
        res.status(500).send('Ошибка при сохранении настроек');
    }
};

module.exports = {saveUserSettings}