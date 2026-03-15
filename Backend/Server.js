const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const envLocalPath = path.join(__dirname, ".env.local");
dotenv.config({
  path: fs.existsSync(envLocalPath) ? envLocalPath : undefined,
});

const connectDB = require("./database/MongoDBConnection");
const versionOneRouter = require("./router/versionOne");

const port = Number(process.env.PORT) || 4000;
const app = express();

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
  : true;

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(express.json());
app.use("/", versionOneRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`);
  });
});
