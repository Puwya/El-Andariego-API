const { Schema, model } = require('mongoose');

const Item = model(
  'Item',
  new Schema({
    name: {
      type: String,
      required: true,
      index: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      index: true,
    },
    price: {
      type: String,
      required: true,
    },
  }),
  'items'
);

module.exports = Item;
