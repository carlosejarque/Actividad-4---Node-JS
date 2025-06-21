const Joi = require('joi');

exports.tripSchema = Joi.object({
  title: Joi.string().min(2).max(100).required(),
  description: Joi.string().allow('', null),
  country: Joi.string().min(2).max(100).required(),
  city: Joi.string().min(2).max(100).allow('', null),
  start_date: Joi.date().required(),
  end_date: Joi.date().required()
});

