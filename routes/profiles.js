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

/**
 * @openapi
 * '/api/v1/profiles':
 *  get:
 *     tags:
 *     - Profiles
 *     summary: Get all profiles
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
 *                  website:
 *                    type: string
 *                  location:
 *                    type: string
 *                  skills:
 *                    type: string
 *                  bio:
 *                     type: string
 *                  githubusername:
 *                     type: string
 *       400:
 *         description: Bad request
 */
router.route('/').get(getProfiles);

/**
 * @openapi
 * '/api/v1/profiles':
 *  post:
 *     tags:
 *     - Profiles
 *     summary: Create a profile
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - website
 *              - location
 *              - skills
 *              - bio
 *              - githubusername
 *            properties:
 *               website:
 *                type: string
 *                default: New.name.com
 *               location:
 *                type: string
 *                default: kigali
 *               skills:
 *                 type: string
 *                 default: nodejs
 *               bio:
 *                  type: string
 *                  default: new user
 *               githubusername:
 *                  type: string
 *                  default: shalomdauphin
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.route('/').post(protect, createProfile);

/**
 * @openapi
 * '/api/v1/profiles/{id}':
 *  get:
 *     tags:
 *     - Profiles
 *     summary: Get one profile
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
 *                  website:
 *                    type: string
 *                  location:
 *                    type: string
 *                  skills:
 *                     type: string
 *                  bio:
 *                     type: string
 *                  githubusername:
 *                     type: string
 *       400:
 *         description: Bad request
 */
router.route('/:id').get(getOneProfile);

/**
 * @openapi
 * '/api/v1/profiles/{id}':
 *  put:
 *     tags:
 *     - Profiles
 *     summary: update a profile
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - website
 *              - location
 *              - skills
 *              - bio
 *              - githubusername
 *            properties:
 *              website:
 *                type: string
 *                default: shalom.ac.rw
 *              location:
 *                 type: string
 *                 default: kigali
 *              skills:
 *                 type: string
 *                 default: nodejs
 *              bio:
 *                 type: string
 *                 default: new member
 *              githubusername:
 *                 type: string
 *                 default: shalomdauphin
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.route('/:id').put(protect, updateProfile);

/**
 * @openapi
 * '/api/v1/profiles/{id}':
 *  delete:
 *     tags:
 *     - Profiles
 *     summary: Remove profile by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the profile
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.route('/:id').delete(protect, deleteProfile);

module.exports = router;
