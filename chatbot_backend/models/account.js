const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    salt: String,
    avatar: String,
    isAdmin: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('Account', accountSchema);
