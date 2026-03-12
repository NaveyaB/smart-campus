const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

router.post("/", protect, authorize("admin"), createStudent);

router.get("/", protect, getStudents);

router.get("/:id", protect, getStudent);

router.put("/:id", protect, authorize("admin","staff"), updateStudent);

router.delete("/:id", protect, authorize("admin"), deleteStudent);

module.exports = router;