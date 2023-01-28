const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');

require('dotenv').config();

const dbConnect = require('./config/db');
const app = express();
mongoose.set('strictQuery', true);
app.use(express.json());

dbConnect();
mongoose.connection.once('open', () => {
  console.log('Connected to Database!!!');
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`.blue);
  });
});
