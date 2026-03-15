
const Header = require("../../model/HeaderModel");

async function getHeaders() {
  return Header.find().sort({ id: 1 }).lean();
}

async function createHeaders(payload) {
  const entries = Array.isArray(payload) ? payload : [payload];

  if (entries.length === 0) {
    throw new Error("At least one header entry is required.");
  }

  const normalizedEntries = entries.map(({ id, name, href, link }) => ({
    id,
    name,
    link: link ?? href,
  }));

  return Header.insertMany(normalizedEntries, { ordered: true });
}

async function updateHeader(id, payload) {
  const update = {};

  if (payload.name !== undefined) {
    update.name = payload.name;
  }

  if (payload.link !== undefined || payload.href !== undefined) {
    update.link = payload.link ?? payload.href;
  }

  return Header.findOneAndUpdate({ id: Number(id) }, update, {
    new: true,
    runValidators: true,
  }).lean();
}

async function deleteHeader(id) {
  return Header.findOneAndDelete({ id: Number(id) }).lean();
}

module.exports = {
  getHeaders,
  createHeaders,
  updateHeader,
  deleteHeader,
};
