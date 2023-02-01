const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.CreateUser = async (req, res) => {
  bcrypt.hash(req.body.password, 10);
};
