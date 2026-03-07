const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
  : true;

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Never Forgotten backend is running.",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "express-backend",
    timestamp: new Date().toISOString(),
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

module.exports = app;
