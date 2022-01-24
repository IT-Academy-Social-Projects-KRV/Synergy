import statusCode from 'http-status';
import PDFDocument from 'pdfkit';
import projectRepository from '../dal/projectRepository';
import billSettingsRepository from '../dal/billSettingsRepository';

const generatePdf = async (id) => {
  const buffers = [];
  const doc = new PDFDocument({ bufferPages: true });

  const projectInfo = await projectRepository.getProject(id);
  const billInfo = await billSettingsRepository.getBillSettings();

  let billData = {};
  billInfo.map((el) => {
    billData = {
      incomeTax: el.incomeTax,
      militaryTax: el.militaryTax,
    }
    return 0;
  })

  const resIncomeTax = projectInfo.capital * billData.incomeTax;
  const resMilitaryTax = projectInfo.capital * billData.militaryTax;
  const totalTax = resIncomeTax + resMilitaryTax;
  let sumProjectItems = 0;
  projectInfo.items.forEach(el => {
    sumProjectItems += el.price;
  });

  doc.on('data', buffers.push.bind(buffers));

  doc.font('Times-Roman')
    .fontSize(35)
    .text(`Synergy invoice`, {
      align: 'center',
    });
  doc.moveDown();
  doc.font('Times-Roman')
    .fontSize(14)
    .text(`${projectInfo.name}`, {
      align: 'center',
    });
  doc.moveDown();
  doc.text(`${projectInfo.description}`);
  doc.moveDown();
  doc.text(`Project capital : ${projectInfo.capital}`);
  doc.moveDown();
  doc.text(`The price of all items is : ${sumProjectItems}`);
  doc.moveDown();
  doc.text(`Income tax is ${billData.incomeTax} : ${resIncomeTax}`);
  doc.moveDown();
  doc.text(`Military tax is ${billData.militaryTax} : ${resMilitaryTax}`);
  doc.moveDown();
  doc.text(`Total tax is : ${totalTax}`);
  doc.moveDown();
  doc.text('© Synergy 2021', 20, doc.page.height - 50, {
    lineBreak: false,
  });

  return {
    status: statusCode.OK,
    doc,
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
