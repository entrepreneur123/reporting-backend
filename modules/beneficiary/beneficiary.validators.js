const Joi = require("joi");
const { AbstractValidator } = require("@rumsan/core/abstract");

const validators = {
  add: {
    payload: Joi.object({}),
  },
};

module.exports = class extends AbstractValidator {
  validators = validators;
};
