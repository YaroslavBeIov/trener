const profileTraineeService = require ('./profileTraineeService')

var getUserProfile = async (req, res) => {
  const userId = req.params.id;

  try {
    const userProfile = await profileTraineeService.getUserProfile(userId);
    if (!userProfile) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Ошибка при получении профиля пользователя:', error);
    res.status(500).json({ message: 'Ошибка при получении профиля пользователя' });
  }
};

module.exports = {getUserProfile};
