import statusCode from 'http-status';
import billSettingsService from '../services/billSettingsService';

const generatePdf = async (req, res) => {
  const { id } = req.params;
  const billSettings = await billSettingsService.generatePdf(id);

  res.status(billSettings.status);
  res.setHeader('Content-Type', 'application/pdf');

  billSettings.doc.pipe(res);
  billSettings.doc.end();
};

const getBillSettings = async (req, res) => {
  const billSettings = await billSettingsService.getBillSettings();
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
  generatePdf,
  getBillSettings,
  updateBillSettings,
};
