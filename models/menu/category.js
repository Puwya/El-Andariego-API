const { Schema, model } = require('mongoose');

const Category = model(
  'Category',
  new Schema({
    name: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  }),
  'categories'
);

module.exports = Category;
