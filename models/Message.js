const { Schema, default: mongoose } = require('mongoose');

const messageSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
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

const message = mongoose.model('message', messageSchema);

module.exports = message;
