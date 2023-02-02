const express = require('express');
const {
  register,
  login,
  getMe,
  updateDetails,
} = require('../controllers/auth');

const router = express.Router();
const { protect } = require('../middlewares/auth');

router.post('/register', register);
router.post('/login', login);
router.put('/updatedetails', protect, updateDetails);
router.get('/me', protect, getMe);

module.exports = router;
