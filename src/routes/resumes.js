const express = require("express");
const multer = require("multer");
const { uploadToBlob } = require("../services/blobService");
const { saveCandidate, getCandidates } = require("../services/cosmosService");

const router = express.Router();
const upload = multer();

router.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    const file = req.file;

    const blobUrl = await uploadToBlob(
      file.originalname,
      file.buffer
    );

    const candidateData = {
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      education: req.body.education,
      experience: req.body.experience,
      skills: req.body.skills,
      tech: req.body.tech,
      resumeUrl: blobUrl,
      uploadedAt: new Date(),
    };

    await saveCandidate(candidateData);

    res.json({
      message: "Resume uploaded successfully",
      url: blobUrl,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/list", async (req, res) => {
  const data = await getCandidates();
  res.json(data);
});

module.exports = router;
