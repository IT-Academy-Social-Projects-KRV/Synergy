import statusCode from 'http-status';
import settingsService from '../services/settingsService';

const updateUserSettings = async (req, res) => {
  const {
    firstName, lastName, id,
  } = req.body;
  const settings = await settingsService.updateSettings(firstName, lastName, id);
  res.status(statusCode.OK)
    .json(settings);
};

const updatePassword = async (req, res) => {
  const {
    password, userId,
  } = req.body;
  const resetPassword = await settingsService.updatePassword(password, userId);
  res.status(statusCode.OK)
    .json(resetPassword);
};

export {
  updateUserSettings,
  updatePassword,
};
