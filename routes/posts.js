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

/**
 * @openapi
 * '/api/v1/posts':
 *  get:
 *     tags:
 *     - Posts
 *     summary: Get all Posts
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  email:
 *                    type: string
 *                  text:
 *                     type: string
 *       400:
 *         description: Bad request
 */
router.route('/').get(getPosts);

/**
 * @openapi
 * '/api/v1/posts':
 *  post:
 *     tags:
 *     - Posts
 *     summary: Create a Post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - text
 *            properties:
 *               name:
 *                type: string
 *                default: New  Name
 *               email:
 *                type: string
 *                default: new@gmail.com
 *               text:
 *                 type: string
 *                 default: new text
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.route('/').post(protect, createPost);

/**
 * @openapi
 * '/api/v1/posts/{id}':
 *  get:
 *     tags:
 *     - Posts
 *     summary: Get all Posts
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  email:
 *                    type: string
 *                  text:
 *                     type: string
 *       400:
 *         description: Bad request
 */
router.route('/:id').get(getOnePost);

/**
 * @openapi
 * '/api/v1/posts':
 *  put:
 *     tags:
 *     - Posts
 *     summary: update a post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - text
 *            properties:
 *              name:
 *                type: string
 *                default: shalom
 *              email:
 *                 type: string
 *                 default: shalom@gmail.com
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.route('/:id').put(protect, updatePost);

/**
 * @openapi
 * '/api/v1/posts/{id}':
 *  delete:
 *     tags:
 *     - Posts
 *     summary: Remove post by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the post
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.route('/:id').delete(protect, deletepost);

module.exports = router;
