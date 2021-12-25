const settingsRepository = require('../dal/settingsRepository');

const updateSettings = async (firstName, lastName, userId) => {
    const databaseResult = await settingsRepository.updateSettings(firstName, lastName, userId);
    return databaseResult;
};

const updatePassword = async (password, userId) => {
  const databaseResult = await settingsRepository.updatePassword(password, userId);
  return databaseResult;
}
module.exports = {
  updateSettings,
  updatePassword,
};
