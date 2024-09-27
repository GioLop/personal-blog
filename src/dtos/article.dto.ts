import Joi from 'joi';

const articleTitle = Joi.string();
const publishDate = Joi.date();
const content = Joi.string();

const FIELDS = {
  TITLE: 'Article Title',
  DATE: 'Publish Date',
  CONTENT: 'Content'
};

const titleMessages = {
  'string.base': `"${FIELDS.TITLE}" should be a type of string`,
  'string.empty': `"${FIELDS.TITLE}" must contain value`,
  'any.required': `"${FIELDS.TITLE}" is a required field`
};

const dateMessages = {
  'date.base': `"${FIELDS.DATE}" must be a valid date`,
  'string.empty': `"${FIELDS.DATE}" must contain value`,
  'any.required': `"${FIELDS.TITLE}" is a required field`
};

const contentMessages = {
  'string.base': `"${FIELDS.CONTENT}" should be a type of string`,
  'string.empty': `"${FIELDS.CONTENT}" must contain value`,
  'any.required': `"${FIELDS.CONTENT}" is a required field`
};

const createArticleDto = Joi.object({
  articleTitle: articleTitle.required().messages(titleMessages),
  publishDate: publishDate.required().messages(dateMessages),
  content: content.required().messages(contentMessages)
});

export {
  createArticleDto
};