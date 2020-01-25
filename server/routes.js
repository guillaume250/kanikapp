const path = require("path");
//const app = require("../app");
const _ = require("underscore");
const aclRoutes = require("./resources/routes.json");

const controllers = {};
controllers.angular = function(req, res) {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
};
controllers.users = require("./controllers/users");
const services = require("./services/auth");

module.exports = app => {
  // Initial route
  app.get("/", controllers.angular);
  // Authentication route
  app.post("/auth", services.login);
  app.post("/unauth", services.logout);

  //***********API Routes****************
  //Users related routes
  app.get("/api/users", controllers.users.api.list);
  app.post("/api/user", controllers.users.api.add);
};
