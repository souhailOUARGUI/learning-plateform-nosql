const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const Schema = mongoose.Schema;

const courseSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // en heures
      required: true,
      min: 1,
    },
    level: {
      type: String,
      enum: ["débutant", "intermédiaire", "avancé"],
      default: "débutant",
    },
    topics: [{ type: String, trim: true }],
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    enrolledStudnents: [
      {
        student: {
          type: Schema.Types.ObjectId,
          ref: "Student",
        },
        enrollmentDate: {
          type: Date,
          default: Date.now,
        },
        progress: {
          type: Number,
          default: 0,
          min: 0,
          max: 100,
        },
      },
    ],
    price: { type: Number, required: true, min: 0 },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
