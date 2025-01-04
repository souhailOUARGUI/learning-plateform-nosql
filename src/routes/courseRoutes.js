// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : - > Améliorer la lisibilité du code avec des fichiers plus courts et focalisés
// -> Faciliter la maintenance en organisant les routes par fonctionnalité
// -> Rendre plus facile l'ajout ou la modification de fonctionnalités

// Question : Comment organiser les routes de manière cohérente ?
// Réponse: -> Regrouper les routes par domaine fonctionnel (stdents.routes.js, courses.routes.js, etc.)
// -> Utiliser des préfixes clairs pour chaque groupe (/api/users, /api/courses)
// -> Suivre les conventions RESTful (GET pour lire, POST pour créer, etc.)

const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Routes pour les cours
router.get("/", courseController.getCourses);
router.get("/stats", courseController.getCourseStats);
router.get("/:id", courseController.getCourse);
router.post("/", courseController.createCourse);
router.patch("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
