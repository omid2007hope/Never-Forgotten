const express = require("express");
const headerController = require("../../controller/versionOne/Header");

const router = express.Router();

router.get("/server", (_req, res) => {
  res.status(200).send("server is running");
});

router.get("/health", (_req, res) => {
  res.status(200).json({
    status: "OK",
    service: "Never Forgotten backend",
  });
});

router
  .route("/headers")
  .get(headerController.getHeaders)
  .post(headerController.createHeaders);

router
  .route("/headers/:id")
  .patch(headerController.updateHeader)
  .delete(headerController.deleteHeader);

module.exports = router;
