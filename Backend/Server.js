const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const envLocalPath = path.join(__dirname, ".env.local");
dotenv.config({
  path: fs.existsSync(envLocalPath) ? envLocalPath : undefined,
});

const connectDB = require("./database/MongoDBConnection");

const app = require("./app");

const port = Number(process.env.PORT) || 4000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`);
  });
});
