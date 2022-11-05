const { Schema, model } = require("mongoose");
const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "USER_ROLE",
  },
});
module.exports = model("User", UserSchema);
