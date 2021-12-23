const Joi = require('joi')

const schemas = {
  getItem: Joi.object({
    id: Joi.number().positive().required(),
  }),
  postItem: Joi.object({
    name: Joi.string().alphanum().required(),
    description: Joi.string().alphanum().required(),
    price: Joi.number().positive().required(),
    priceMargin: Joi.number().positive().required(),
    statusId: Joi.number().positive().required(),
    projectId: Joi.number().positive().required(),
  }),
};

module.exports = schemas;
