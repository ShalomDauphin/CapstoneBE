const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const cookieParser = require('cookie-parser');

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

//Mount routers
app.use('/api/v1/posts', posts);
app.use('/api/v1/profiles', profiles);
app.use('/api/v1/auth', auth);

module.exports = app;
