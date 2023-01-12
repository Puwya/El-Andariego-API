require('dotenv').config();
const { Router } = require('express');
const sgMail = require('@sendgrid/mail');
const Application = require('../../models/send-grid/send-grid');
const axios = require('axios');

const router = Router();

sgMail.setApiKey(process.env.SEND_GRID_API);

router.post('/save', async (req, res) => {
  try {
    const request = req.body;
    const msg = {
      to: 'guluis1980@gmail.com',
      from: 'elandariegomex@gmail.com',
      subject: 'Catering Info',
      html: `
      <div>
        <p><strong>Name: </strong>${request.first_name} ${request.last_name}</p>
        <p><strong>Email: </strong>${request.email}</p>
        <p><strong>Phone Number: </strong>${request.phone}</p>
        <p><strong>Description: </strong>${request.description}</p>
        <p><strong>Event Type: </strong>${request.event_type}</p>
        <p><strong>Date Requested: </strong>${request.date}</p>
      </div>
      `,
    };

    sgMail.send(msg);

    const application = new Application({
      first_name: request.first_name,
      last_name: request.last_name,
      email: request.email,
      phone: request.phone,
      description: request.description,
      event_type: request.event_type,
      date: request.date,
    });

    application.save((err) => {
      if (err) {
        throw err;
      }
    });

    res.status(201).json({ msg: 'Email sent and saved.' });
  } catch (err) {
    res.status(401).json({ err });
  }
});

router.post('/subscribe', async (req, res) => {
  const data = {
    contacts: [
      {
        email: req.body.email,
      },
    ],
  };

  axios.request({
    method: 'PUT',
    url: 'https://api.sendgrid.com/v3/marketing/contacts',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SEND_GRID_API}`,
    },
    data,
  });

  res.status(201).json({ msg: 'Email has been subscribed' });
});

module.exports = router;
