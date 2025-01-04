const mongoose = require("mongoose");

const intructorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  expertise: [
    {
      type: String,
      required: true,
    },
  ],
});

const Instructor = mongoose.model("Instructor", intructorSchema);

module.exports = Instructor;
