const mongoose = require("mongoose");

const intructorSchema = new mongoose.Schema({});

const Instructor = mongoose.model("Instructor", intructorSchema);

module.exports = Instructor;
