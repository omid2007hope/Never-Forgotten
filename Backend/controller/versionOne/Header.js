const headerService = require("../../service/versionOne/Header");

async function getHeaders(_req, res) {
  try {
    const headers = await headerService.getHeaders();
    res.status(200).json(headers);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

async function createHeaders(req, res) {
  try {
    const createdHeaders = await headerService.createHeaders(req.body);
    res.status(201).json(createdHeaders);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

async function updateHeader(req, res) {
  try {
    const updatedHeader = await headerService.updateHeader(req.params.id, req.body);

    if (!updatedHeader) {
      return res.status(404).json({
        error: "Header not found",
      });
    }

    return res.status(200).json(updatedHeader);
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}

async function deleteHeader(req, res) {
  try {
    const deletedHeader = await headerService.deleteHeader(req.params.id);

    if (!deletedHeader) {
      return res.status(404).json({
        error: "Header not found",
      });
    }

    return res.status(200).json({
      message: "Header deleted successfully",
      data: deletedHeader,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = {
  getHeaders,
  createHeaders,
  updateHeader,
  deleteHeader,
};
