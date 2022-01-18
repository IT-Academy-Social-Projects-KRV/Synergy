import statusCode from 'http-status';
import PDFDocument from 'pdfkit';
import projectRepository from '../dal/projectRepository';
import billSettingsRepository from '../dal/billSettingsRepository';

const generatePdf = async (id, res) => {
  const buffers = [];
  const doc = new PDFDocument({ bufferPages: true });

  const projectInfo = await projectRepository.getProject(id);
  const billData = await billSettingsRepository.getBillSettings();
  // eslint-disable-next-line no-console
  console.log(billData.incomeTax);
  let sumProjectItems = 0;
  const resIncomeTax = projectInfo.capital * billData.incomeTax;
  projectInfo.items.forEach(el => {
    sumProjectItems += el.price;
  });

  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {
    const pdfData = Buffer.concat(buffers);
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(pdfData),
      'Content-Type': 'application/pdf',
      'Content-disposition': 'attachment;filename=invoice.pdf',
    })
      .end(pdfData);
  });

  doc.font('Times-Roman')
    .fontSize(35)
    .text(`Synecgy invoice`, {
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
  doc.text('© Synergy 2021', 20, doc.page.height - 50, {
    lineBreak: false,
  });
  doc.end();
  return {
    status: statusCode.OK,
    res,
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
