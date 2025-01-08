const { ObjectId } = require("mongodb");
const db = require("../config/db");
const mongoService = require("../services/mongoService");
const redisService = require("../services/redisService");
const Student = require("../models/Student");

async function getStudents(req, res) {
  try {
    const students = await mongoService.findAll(Student);
    if (students) {
      res.status(200).json({ students });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getStudent(req, res) {
  try {
    const student = await mongoService.findOneById(Student, req.params.id);
    if (student) {
      res.status(200).json({ student });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function createStudent(req, res) {
  const newStudent = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    enrolledCourses: req.body.enrolledCourses,
  });
  try {
    await newStudent.save();
    return res
      .status(201)
      .json({ message: "student creatred succeesfully", newStudent });
  } catch (error) {
    res.status(400).json({ message: error.Message });
  }
}

async function updateStudent(req, res) {
  await mongoService.update(req, res, Student, req.params.id);
}
async function deleteStudent(req, res) {
  await mongoService.destroy(req, res, Student, req.params.is);
}

module.exports = {
  createStudent,
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};
