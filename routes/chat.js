const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'userModel', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const chatRoomSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel', required: true }],
  messages: [messageSchema],
});

const chatRoomModel = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = chatRoomModel;
