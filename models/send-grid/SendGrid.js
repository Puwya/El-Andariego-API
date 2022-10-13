const { Schema, model } = require('mongoose');

const Application = model(
  'Application',
  new Schema({
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    event_type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  }),
  'send-grid'
);

module.exports = Application;
