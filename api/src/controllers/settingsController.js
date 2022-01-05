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
//! For next sprint
const getBillSettings = async (req, res) => {
  const { id } = req.params;
  const billSettings = await settingsService.getBillSettings(id);
  res.status(statusCode.OK)
    .json(billSettings);
};

const updateBillSettings = async (req, res) => {
  const {
    tax, rate,
  } = req.body;
  const billSettings = await settingsService.updateBillSettings(tax, rate)
  res.status(statusCode.OK)
    .json(billSettings);
};

export {
  updateUserSettings,
  updatePassword,
  getBillSettings,
  updateBillSettings,
};
