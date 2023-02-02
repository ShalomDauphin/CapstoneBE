const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const dbConnect = require('./config/db');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/error');

mongoose.set('strictQuery', true);
require('dotenv').config();

const posts = require('./routes/posts');
const profiles = require('./routes/profiles');
const auth = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(logger);

//Mount routers
app.use('/api/v1/posts', posts);
app.use('/api/v1/profiles', profiles);
app.use('/api/v1/auth', auth);

app.use(errorHandler);
//connect to the database
dbConnect();
mongoose.connection.once('open', () => {
  console.log('Connected to Database!!!');
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`.blue);
  });
});

//handle unhandled promise rejections

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //exit
  server.close(() => process.exit(1));
});
