const { Schema, default: mongoose } = require('mongoose');

const profileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  website: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  githubusername: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const profile = mongoose.model('profile', profileSchema);

module.exports = profile;
