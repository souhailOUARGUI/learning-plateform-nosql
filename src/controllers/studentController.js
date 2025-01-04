const { ObjectId } = require("mongodb");
const db = require("../config/db");
const mongoService = require("../services/mongoService");
const redisService = require("../services/redisService");

async function createStudent() {}
async function getStudent() {}
async function getStudents(req, res) {
  res.json({ message: "heeeeloooo" });
  console.log("hello");
}
async function updateStudent() {}
async function deleteStudent() {}

module.exports = {
  createStudent,
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};
