require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + '/assets'));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Mongo Connection Successful'))
  .catch((err) => console.log(err));

app.use('/api/menu', require('./routes/api/menu/menu'));
app.use('/api/categories', require('./routes/api/menu/categories'));
app.use('/api/items', require('./routes/api/menu/items'));
app.use('/api/sendgrid', require('./routes/api/sendGrid'));
app.use('/api/search', require('./routes/api/search'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/dist'));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
