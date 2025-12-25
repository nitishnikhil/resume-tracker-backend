/*require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// ✅ Serve frontend FIRST
app.use(express.static(path.join(__dirname, "public")));

// ✅ API routes
app.use("/api/resumes", require("./src/routes/resumes"));

// ✅ Health / backend test route (NOT root)
app.get("/health", (req, res) => {
  res.json({
    status: "success",
    message: "Backend is working!",
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});   
*/
require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/api/resumes", require("./src/routes/resumes"));

// Health check (VERY IMPORTANT for Azure)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Root test
app.get("/api/test", (req, res) => {
  res.json({ status: "success", message: "Backend is working!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

