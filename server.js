const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8"]);
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", require("./routes/main_routes"));
app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
