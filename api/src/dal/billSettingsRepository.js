import Bill from '../models/billModel';

const getBillSettings = async () => {
  try {
    const data = await Bill.findAll();
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const updateBillSettings = async (incomeTax, militaryTax, id) => {
  try {
    const data = await Bill.update({
      incomeTax,
      militaryTax,
    }, { where: { id } });
    return data;
  } catch (err) {
    throw Error(err);
  }
};

export default {
  getBillSettings,
  updateBillSettings,
};
