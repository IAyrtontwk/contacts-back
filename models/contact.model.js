const { Schema, model } = require("mongoose");
const ContactSchema = Schema({
    name: {
        type: String,
        required: true,
      },
    phone: {
        type: String,
        required: true,
      },
    address: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
      },
    job: {
        type: String,
        required: true,
      },
    birthdate: {
        type: String,
        required: true,
      },
    landline: {
        type: String,
        required: true,
      },
  
});
module.exports = model("Contact", ContactSchema);