import statusCode from 'http-status';
import fs from 'fs';
import path from 'path';
import pdf from 'pdf-creator-node';
import options from '../helpers/options';
import projectRepository from '../dal/projectRepository';
import billSettingsRepository from '../dal/billSettingsRepository';

const generatePdf = async (id) => {
  const PORT = process.env.PORT || 5000;
  const html = fs.readFileSync(path.join(__dirname, '../views/templatePDF.html'), 'utf-8');
  const fileFormat = '_doc.pdf';
  const fileName = Math.random() + fileFormat;

  const projectInfo = await projectRepository.getProject(id);

  const docInfo = {
    projectInfo,
  }

  const document = {
    html,
    data: {
      project: docInfo,
    },
    path: `./docs/${fileName}`,
  }
  pdf.create(document, options)
    .catch(err => {
      throw Error(err);
    });
  const filepath = `http://localhost:${PORT}/docs/${fileName}`;
  return {
    status: statusCode.OK,
    filepath,
  }
};

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
  generatePdf,
  getBillSettings,
  updateBillSettings,
};
