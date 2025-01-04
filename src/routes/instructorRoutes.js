const express = require("express");
const router = express.Router();
const instructorController = require("../controllers/instructorController");

router.get("/", instructorController.getInstructors);
router.get("/:id", instructorController.getInstructor);
router.post("/", instructorController.createInstructor);
router.patch("/:id", instructorController.updateInstructor);
router.delete("/:id", instructorController.delteInstructor);

module.exports = router;
