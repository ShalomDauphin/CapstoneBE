const express = require('express');

const {
  getProfiles,
  getOneProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} = require('../controllers/profiles');
const router = express.Router();

router.route('/').get(getProfiles).post(createProfile);

router
  .route('/:id')
  .get(getOneProfile)
  .put(updateProfile)
  .delete(deleteProfile);

module.exports = router;
