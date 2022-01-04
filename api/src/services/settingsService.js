import settingsRepository from '../dal/settingsRepository';

const updateSettings = async (firstName, lastName, id) => {
    const databaseResult = await settingsRepository.updateSettings(firstName, lastName, id);
    return databaseResult;
};

const updatePassword = async (password, userId) => {
  const databaseResult = await settingsRepository.updatePassword(password, userId);
  return databaseResult;
}
export default {
  updateSettings,
  updatePassword,
};
