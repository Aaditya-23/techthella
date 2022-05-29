const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique:false },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
