const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const Post = require('../models/Post');

//@desc   Get all posts
//@route  GET /api/v1/posts
//@access Public
exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).json({ success: true, count: posts.length, data: posts });
});

//@desc   Get single posts
//@route  GET /api/v1/posts/:id
//@access Public
exports.getOnePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(
      new ErrorResponse(`Post not Found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: post });
});

//@desc   Create new posts
//@route  POST /api/v1/posts/
//@access Private
exports.createPost = asyncHandler(async (req, res, next) => {
  const post = await Post.create(req.body);
  res.status(201).json({
    success: true,
    data: post,
  });
});

//@desc   Update  posts
//@route  PUT /api/v1/posts/:id
//@access Private
exports.updatePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!post) {
    return next(
      new ErrorResponse(`Post not Found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: post });
});

//@desc   Delete  posts
//@route  DELETE /api/v1/posts/:id
//@access Private
exports.deletepost = asyncHandler(async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) {
    return next(
      new ErrorResponse(`Post not Found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    msg: `Post with id of ${req.params.id} has been deleted`,
    data: {},
  });
});
