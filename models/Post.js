const { Schema, default: mongoose } = require('mongoose');

const postSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const post = mongoose.model('post', postSchema);

module.exports = post;
