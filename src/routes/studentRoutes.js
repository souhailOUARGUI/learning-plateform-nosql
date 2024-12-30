const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

//routes pour les etudiants

router.post("/", studentController.createStudent);
router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudent);
router.delete("/:id", studentController.deleteStudent);
router.patch("/:id", studentController.updateStudent);

module.exports = router;
