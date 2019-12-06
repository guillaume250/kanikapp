const Users = require("../databases/mongodb/models/users");
const config = require("../../config/keys");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// API
exports.api = {};
exports.api.login = function(req, res) {
  login(req, res);
};
exports.api.list = function(req, res) {
  list(req, res);
};

//Methods that handles APIS
const login = (req, res) => {
  // if (req.params.UserName === "Fabrice") {
  //   console.log("Test User: " + config.test_users.fabrice + " logged in");
  //   res.json(config.test_users.fabrice);
  // } else if (req.params.UserName === "Guillaume") {
  //   console.log("Test User: " + config.test_users.fabrice + " logged in");
  //   res.json(config.test_users.guillaume);
  // } else {}
  Users.findOne({
    UserName: req.params.UserName
  }).exec(function(err, user) {
    if (err) {
      res.send("UserName Not found!");
    } else {
      console.log(user);
      res.json(user);
    }
  });
};

const list = (req, res) => {
  console.log("getting all users");
  Users.find({}).exec(function(err, users) {
    if (err) {
      res.send("error occured");
    } else {
      console.log(users);
      res.json(users);
    }
  });
};
