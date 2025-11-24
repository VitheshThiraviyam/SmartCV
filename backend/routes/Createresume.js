const express = require("express");
const router = express.Router();
const Resume = require("../models/Resume");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

router.post("/create", verifyToken, async (req, res) => {
  try {
    const { title, summary, skills, experience, education, achievements } = req.body;

    const resume = new Resume({
      userId: req.userId,
      title,
      summary,
      skills,
      experience,
      education,
      achievements
    });

    await resume.save();

    res.json({ message: "Resume Created", resume });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/my-resumes", verifyToken, async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.userId });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/all/:id", verifyToken, async (req, res) => {
  const resumes = await Resume.find({ userId: req.userId });
  res.json(resumes);
});

router.delete("/delete/:id", verifyToken, async (req, res) => {
  await Resume.findByIdAndDelete(req.params.id);
  res.json({ message: "Resume deleted" });
});

module.exports = router;
