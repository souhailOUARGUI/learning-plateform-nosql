const mongoose = require("mongoose");
const { ObjectId, Timestamp } = require("mongodb");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
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
    // enrolledCourses: [
    //   {
    //     course: { type: Schema.Types.ObjectId, ref: "Course" },
    //     status: {
    //       type: String,
    //       enum: ["active", "completed", "dropped"],
    //       default: "active",
    //     },
    //     progress: {
    //       type: Number,
    //       default: 0,
    //       min: 0,
    //       max: 100,
    //     },
    //     enrollmentDate: {
    //       type: Date,
    //       default: Date.now,
    //     },
    //     completionDate: {
    //       type: Date,
    //     },
    //   },
    // ],
  },
  {
    Timestamp: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
