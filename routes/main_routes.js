const routes = require("express").Router();
const main_controllers = require("../controllers/main_controllers");

routes.get("/", main_controllers);

module.exports = routes;
