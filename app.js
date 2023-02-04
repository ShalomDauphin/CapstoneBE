const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const cookieParser = require('cookie-parser');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const logger = require('./middlewares/logger');

mongoose.set('strictQuery', true);
require('dotenv').config();

const posts = require('./routes/posts');
const profiles = require('./routes/profiles');
const auth = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(logger);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Capstone Backend',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3500/',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpecs = swaggerJsDoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
//Mount routers
app.use('/api/v1/posts', posts);
app.use('/api/v1/profiles', profiles);
app.use('/api/v1/auth', auth);

module.exports = app;
