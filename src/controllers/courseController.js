// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse:
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse :

const { ObjectId } = require("mongodb");
const db = require("../config/db");
const mongoService = require("../services/mongoService");
const redisService = require("../services/redisService");
const Course = require("../models/Course");

async function getCourses(req, res) {
  try {
    const courses = await mongoService.findAll(Course);
    res.json(courses);
  } catch (error) {
    res.status(400).json({ message: error.Message });
  }
}

async function getCourse(req, res) {
  try {
    console.log(req.params.id);
    const course = await mongoService.findOneById(Course, req.params.id);
    res.json(course);
  } catch (error) {
    res.status(400).json({ message: error.Message });
  }
}

async function createCourse(req, res) {
  // TODO: Implémenter la création d'un cours
  // Utiliser les services pour la logique réutilisable
  const course = new Course({
    title: req.body.title,
    description: req.body.description,
    duration: req.body.duration,
    level: req.body.level,
    topics: req.body.topics,
    price: req.body.price,
    isPublished: req.body.isPublished,
  });
  try {
    const newCourse = await course.save();
    return res.status(201).json({ message: "Course created", newCourse });
  } catch (error) {
    res.status(400).json({ message: error.Message });
  }
}
async function getCourseStats(req, res) {
  console.log("hello");
  res.json({ message: "Course Stats :) " });
}

async function updateCourse(req, res) {
  await mongoService.update(req, res, Course, req.params.id);
}

async function deleteCourse(req, res) {
  await mongoService.destroy(req, res, Course, req.params.id);
}

// Export des contrôleurs
module.exports = {
  // TODO: Exporter les fonctions du contrôleur
  createCourse,
  getCourse,
  getCourseStats,
  getCourses,
  updateCourse,
  deleteCourse,
};
