import statusCode from 'http-status';
import billSettingsRepository from '../dal/billSettingsRepository';

const getBillSettings = async () => {
  const databaseResult = await billSettingsRepository.getBillSettings();
  return {
    status: statusCode.OK,
    databaseResult,
  }
};

const updateBillSettings = async (incomeTax, militaryTax, id) => {
  const databaseResult = await billSettingsRepository.updateBillSettings(incomeTax, militaryTax, id);
  return databaseResult;
};

export default {
  getBillSettings,
  updateBillSettings,
};
