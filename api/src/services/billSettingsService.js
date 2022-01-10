import statusCode from 'http-status';
import fs from 'fs';
import path from 'path';
import pdf from 'pdf-creator-node';
import billSettingsRepository from '../dal/billSettingsRepository';
import options from '../helpers/options';
import projectRepository from '../dal/projectRepository';

const generatePdf = async (id) => {
  const html = fs.readFileSync(path.join(__dirname, '../views/templatePDF.html'), 'utf-8');
  const fileFormat = '_doc.pdf';
  const fileName = Math.random() + fileFormat;
  const projectInfo = [];

  const data = await projectRepository.getProject(id);

  data.forEach(el => {
    const project = {
      name: el.name,
      description: el.description,
      capital: el.capital,
    }
    projectInfo.push(project);
  });
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

  return {
    status: statusCode.OK,
    pdf,
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
