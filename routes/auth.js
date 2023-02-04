const express = require('express');
const {
  register,
  login,
  getMe,
  updateDetails,
} = require('../controllers/auth');

const router = express.Router();
const { protect } = require('../middlewares/auth');

/**
 * @openapi
 * '/api/v1/auth/register':
 *  post:
 *     tags:
 *     - Auth
 *     summary: Register a Useer
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *            properties:
 *               name:
 *                type: string
 *                default: New  Name
 *               email:
 *                type: string
 *                default: new@gmail.com
 *               password:
 *                 type: string
 *                 default: 123456
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/register', register);

/**
 * @openapi
 * '/api/v1/auth/login':
 *  post:
 *     tags:
 *     - Auth
 *     summary: Login a User
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *               email:
 *                type: string
 *                default: new@gmail.com
 *               password:
 *                 type: string
 *                 default: 123456
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post('/login', login);

/**
 * @openapi
 * '/api/v1/auth/updatedetails':
 *  put:
 *     tags:
 *     - Auth
 *     summary: update a user info
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
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
router.put('/updatedetails', protect, updateDetails);

/**
 * @openapi
 * '/api/v1/auth/me':
 *  get:
 *     tags:
 *     - Auth
 *     summary: Get a logged in user
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
 *       400:
 *         description: Bad request
 */
router.get('/me', protect, getMe);

module.exports = router;
