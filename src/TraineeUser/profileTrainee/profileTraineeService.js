const traineeModel = require('../trainee/traineeModel');

const getUserProfile = async (userId) => {
  try {
    const userProfile = await traineeModel.findOne({ _id: userId });
    return userProfile;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserProfile,
};
