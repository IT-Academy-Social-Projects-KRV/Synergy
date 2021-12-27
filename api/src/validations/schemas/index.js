const Joi = require('joi')

const schemas = {
  projectSchema: {
    id: Joi.object({
      id: Joi.number().positive().required(),
    }),
    createProject: Joi.object({
      name: Joi.string().alphanum().required(),
      description: Joi.string().alphanum().required(),
      capital: Joi.number().positive().required(),
      dateStart: Joi.date().required(),
      dateFinish: Joi.date().required(),
    }),
    updateProject: Joi.object({
      name: Joi.string().alphanum(),
      description: Joi.string().alphanum(),
      capital: Joi.number().positive(),
      dateStart: Joi.date(),
      dateFinish: Joi.date(),
    }),
  },
  itemSchema: {
    itemId: Joi.object({
      id: Joi.number().positive().required(),
    }),
    createItem: Joi.object({
      name: Joi.string().alphanum().required(),
      description: Joi.string().alphanum().required(),
      price: Joi.number().positive().required(),
      priceMargin: Joi.number().positive().required(),
      statusId: Joi.number().positive().required(),
      projectId: Joi.number().positive().required(),
    }),
    editItem: Joi.object({
      name: Joi.string().alphanum(),
      description: Joi.string().alphanum(),
      price: Joi.number().positive(),
      priceMargin: Joi.number().positive(),
      statusId: Joi.number().positive(),
    }),
  },
};

module.exports = schemas;
