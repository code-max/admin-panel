require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('API');
});

// Connect Server
app.listen(process.env.PORT, () =>
  console.log(
    `Server running at http://${process.env.HOSTNAME}:${process.env.PORT}/api`,
  ),
);

// Connect DB
mongoose
  .connect(`${process.env.DB_URI}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log('MongoDB is connected');
    },
    err => {
      console.log('Can not connect to the database ' + err);
    },
  );

// Routes
app.use('/api/users', require('../routes/api/users'));
app.use('/api/auth', require('../routes/api/auth'));
app.use('/api/profile', require('../routes/api/profile'));
