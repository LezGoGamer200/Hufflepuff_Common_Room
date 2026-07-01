const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8"]);

const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("\x1b[36m%s\x1b[0m", "Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
