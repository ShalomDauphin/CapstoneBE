const express = require('express');

const {
  getPosts,
  getOnePost,
  createPost,
  updatePost,
  deletepost,
} = require('../controllers/posts');
const router = express.Router();

router.route('/').get(getPosts).post(createPost);

router.route('/:id').get(getOnePost).put(updatePost).delete(deletepost);

module.exports = router;
