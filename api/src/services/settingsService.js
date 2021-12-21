const settingsRepository = require('../dal/settingsRepository');

const updateSettings = async (firstName, lastName, email) => {
    const databaseResult = await settingsRepository.updateSettings(firstName, lastName, email);
    return databaseResult;
};

module.exports = {
  updateSettings,
};
