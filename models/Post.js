const { Schema, default: mongoose } = require('mongoose');

const postSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile',
  },
  name: {
    type: String,
    required: [true, 'Please add a name'],
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'Please add a valid email',
    ],
  },
  text: {
    type: String,
    required: [true, 'please add a text'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const post = mongoose.model('post', postSchema);

module.exports = post;
