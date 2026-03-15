const BaseService = require("../BaseService");
const Header = require("../../model/HeaderModel");

class HeaderService extends BaseService {
  constructor() {
    super(Header);
  }

  normalizeHeader = ({ id, name, href, link }) => ({
    id,
    name,
    link: link ?? href,
  });

  getHeaders = async () => this.findAllWithSort({}, { id: 1 });

  createHeaders = async (payload) => {
    const entries = Array.isArray(payload) ? payload : [payload];

    if (entries.length === 0) {
      throw new Error("At least one header entry is required.");
    }

    return Promise.all(
      entries.map((entry) => this.createObject(this.normalizeHeader(entry))),
    );
  };

  updateHeader = async (id, payload) => {
    const update = {};

    if (payload.name !== undefined) {
      update.name = payload.name;
    }

    if (payload.link !== undefined || payload.href !== undefined) {
      update.link = payload.link ?? payload.href;
    }

    return this.update({ id: Number(id) }, update);
  };

  deleteHeader = async (id) => this.hardDelete({ id: Number(id) });
}

module.exports = new HeaderService();
