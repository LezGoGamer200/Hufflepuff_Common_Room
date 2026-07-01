const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8"]);
const express = require("express");
const mongodb = require("./db/connect");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/main_routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()).use("/", routes);

const start = async () => {
  try {
    // connectDB
    await mongodb(process.env.MONGODB_URI);
    app.listen(
      PORT,
      console.log(
        "\x1b[36m%s\x1b[0m",
        `Server is listening on port ${PORT}...`,
      ),
    );
  } catch (error) {
    console.log(error);
  }
};
start();
