const express = require('express');

const {
  getProfiles,
  getOneProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} = require('../controllers/profiles');
const router = express.Router();
const { protect } = require('../middlewares/auth');

router.route('/').get(getProfiles).post(protect, createProfile);

router
  .route('/:id')
  .get(getOneProfile)
  .put(protect, updateProfile)
  .delete(protect, deleteProfile);

module.exports = router;
