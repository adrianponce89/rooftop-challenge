const https = require("https");

const request = (options, data) =>
  new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.on("data", (d) => {
        const data = JSON.parse(d.toString());
        resolve(data);
      });
    });

    req.on("error", (error) => {
      reject(error);
    });
    if (data) {
      req.write(data);
    }
    req.end();
  });

module.exports = {
  request,
};
