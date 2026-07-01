const routes = require("express").Router();
const main_controllers = require("../controllers/main_controllers");

routes.get("/", main_controllers.functionOne);
routes
  .route("/books")
  .get(main_controllers.retrieveAllBooks)
  .post(main_controllers.addOneBook);
routes.route("/books/:id").delete(main_controllers.removeOneBook);

module.exports = routes;
