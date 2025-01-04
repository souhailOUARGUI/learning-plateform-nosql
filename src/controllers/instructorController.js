const express = require("express");
const mongoService = require("../services/mongoService");
const Instructor = require("../models/Instructor");

async function getInstructors(req, res) {
  try {
    const instructors = await mongoService.findAll(Instructor);
    if (instructors) {
      res.status(201).json({ instructors });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
async function getInstructor(req, res) {
  try {
    const instructor = await mongoService.findOneById(
      Instructor,
      req.params.id
    );
    if (instructor) {
      res.status(201).json({ instructor });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
async function createInstructor(req, res) {
  const Instr = new Instructor({
    firstName: req.body.firstName,
    LastName: req.body.LastName,
    email: req.body.email,
    expertise: req.body.expertise,
  });
  try {
    const newInstructor = await Instr.save();
    return res
      .status(200)
      .json({ message: "instructor created successfully  ", newInstructor });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
async function updateInstructor(req, res) {
  await mongoService.update(req, res, Instructor, req.params.id);
}
async function delteInstructor(req, res) {
  await mongoService.destroy(req, res, Instructor, req.params.id);
}

module.exports = {
  getInstructors,
  getInstructor,
  createInstructor,
  updateInstructor,
  delteInstructor,
};
