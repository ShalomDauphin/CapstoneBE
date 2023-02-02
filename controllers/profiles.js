const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const Profile = require('../models/Profile');
const User = require('../models/User');

//@desc   Get all Profile
//@route  GET /api/v1/profile
//@access Public
exports.getProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find();
  res
    .status(200)
    .json({ success: true, count: profiles.length, data: profiles });
});

//@desc   Get single profile
//@route  GET /api/v1/profiles/:id
//@access Public
exports.getOneProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) {
    return next(
      new ErrorResponse(`Profile not Found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: profile });
});

//@desc   Create new profile
//@route  POST /api/v1/profiles/
//@access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;
  //check for published bootcamps
  const uploadedProfile = await Profile.findOne({ user: req.user.id });
  // if the user in not an admin they can add one boootcamp
  if (uploadedProfile) {
    return next(
      new ErrorResponse(
        `The User with ID ${req.user.id} has already published a profile`,
        400
      )
    );
  }
  const profile = await Profile.create(req.body);
  res.status(201).json({
    success: true,
    data: profile,
  });
});
// exports.createProfile = asyncHandler(async (req, res, next) => {
//   const profile = await Profile.create(req.body);
//   res.status(201).json({
//     success: true,
//     data: profile,
//   });
// });

//@desc   Update  profile
//@route  PUT /api/v1/profiles/:id
//@access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!profile) {
    return next(
      new ErrorResponse(`Profile not Found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: profile });
});

//@desc   Delete  profile
//@route  DELETE /api/v1/profiles/:id
//@access Private
exports.deleteProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findByIdAndDelete(req.params.id);
  if (!profile) {
    return next(
      new ErrorResponse(`Profile not Found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    msg: `Post with id of ${req.params.id} has been deleted`,
    data: {},
  });
});
