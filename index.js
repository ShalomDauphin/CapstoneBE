const app = require('./app');
const errorHandler = require('./middlewares/error');
const dbConnect = require('./config/db');
const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const cookieParser = require('cookie-parser');

const logger = require('./middlewares/logger');

app.use(errorHandler);

//connect to the database
dbConnect();
mongoose.connection.once('open', () => {
  console.log('Connected to Database!!!');
});

//handle unhandled promise rejections

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //exit
  server.close(() => process.exit(1));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`.blue);
});
