var path = require("path");
var app = require("../app");
var _ = require("underscore");
var aclRoutes = require("../resources/routes.json");

var controllers = {};
controllers.angular = function(req, res) {
  res.sendFile(path.join(__dirname, "../app/client", "index.html"));
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
