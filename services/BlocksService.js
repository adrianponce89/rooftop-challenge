const { request } = require("../utils");

class BlocksService {
  constructor() {
    this.hostname = "rooftop-career-switch.herokuapp.com";
  }
  async getBlocks(token) {
    const res = await request({
      hostname: this.hostname,
      path: `/blocks?token=${token}`,
      method: "GET",
    });
    return res.data;
  }
  async checkBlocks(b1, b2, token) {
    const data = new TextEncoder().encode(
      JSON.stringify({
        blocks: [b1, b2],
      })
    );
    const res = await request(
      {
        hostname: this.hostname,
        path: `/check?token=${token}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": data.length,
        },
      },
      data
    );
    return res.message;
  }
  async verifyBlocks(blocks, token) {
    const data = new TextEncoder().encode(
      JSON.stringify({
        encoded: blocks.join(""),
      })
    );
    const res = await request(
      {
        hostname: this.hostname,
        path: `/check?token=${token}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": data.length,
        },
      },
      data
    );
    return res.message;
  }
}

module.exports = BlocksService;
