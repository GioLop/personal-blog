import Joi from 'joi';

const userName = Joi.string();
const userPassword = Joi.string();

const FIELDS = {
  USER_NAME: 'User name',
  PASSWORD: 'Password'
};

const userNameMessages = {
  'string.base': `"${FIELDS.USER_NAME}" should be a type of string`,
  'string.empty': `"${FIELDS.USER_NAME}" must contain value`,
  'any.required': `"${FIELDS.USER_NAME}" is a required field`
};

const passwordMessages = {
  'string.base': `"${FIELDS.PASSWORD}" should be a type of string`,
  'string.empty': `"${FIELDS.PASSWORD}" must contain value`,
  'any.required': `"${FIELDS.PASSWORD}" is a required field`
};

const loginDto = Joi.object({
  userName: userName.required().messages(userNameMessages),
  userPassword: userPassword.required().messages(passwordMessages),
});

export {
  loginDto
};