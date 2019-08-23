require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
  res.send('API');
});

app.listen(process.env.PORT, () =>
  console.log(
    `Server running at http://${process.env.HOSTNAME}:${process.env.PORT}/api`,
  ),
);

mongoose.connect(`${process.env.DB_URI}`, { useNewUrlParser: true }).then(
  () => {
    console.log('MongoDB is connected');
  },
  err => {
    console.log('Can not connect to the database ' + err);
  },
);
