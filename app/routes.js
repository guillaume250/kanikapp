var path = require("path");
var app = require("../app");
var _ = require("underscore");
var aclRoutes = require("../resources/routes.json");

var controllers = {};
controllers.angular = function(req, res) {
  res.sendFile(path.join(__dirname, "../app/client", "index.html"));
};
controllers.auth = require("./controllers/auth");
controllers.users = require("./controllers/users");
module.exports = app => {
  // Initial route
  app.get("/", controllers.angular);
  // Authentication route
  app.post("/auth", controllers.auth.login);
  app.post("/unauth", controllers.auth.logout);

  //***********API Routes****************
  //Users related routes
  app.get("/api/users", controllers.users.api.list);
  app.post("/api/user", controllers.users.api.add);
};
