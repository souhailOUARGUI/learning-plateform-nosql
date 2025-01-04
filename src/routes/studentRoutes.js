const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

//routes pour les etudiants

router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudent);
router.post("/", studentController.createStudent);
router.patch("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
