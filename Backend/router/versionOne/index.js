const express = require("express");
const router = express.Router();

router.get("/server", (_req, res) => {
  res.status(200).send("server is running");
});

module.exports = router;
