const express = require('express');

const {
  getPosts,
  getOnePost,
  createPost,
  updatePost,
  deletepost,
} = require('../controllers/posts');
const { protect } = require('../middlewares/auth');
const router = express.Router();

router.route('/').get(getPosts).post(protect, createPost);

router
  .route('/:id')
  .get(getOnePost)
  .put(protect, updatePost)
  .delete(protect, deletepost);

module.exports = router;
