import statusCode from 'http-status';
import billSettingsService from '../services/billSettingsService';

const getBillSettings = async (req, res) => {
  const { id } = req.params;
  const billSettings = await billSettingsService.getBillSettings(id);
  res.status(statusCode.OK)
    .json(billSettings);
};

const updateBillSettings = async (req, res) => {
  const {
    militaryTax, incomeTax, id,
  } = req.body;
  const billSettings = await billSettingsService.updateBillSettings(militaryTax, incomeTax, id)
  res.status(statusCode.OK)
    .json(billSettings);
};

export {
  getBillSettings,
  updateBillSettings,
};
