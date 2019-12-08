const Users = require("../databases/mongodb/models/users");
const config = require("../../config");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.login = function(req, res) {
  Users.findOne({
    UserName: req.body.UserName
  }).exec(function(err, user) {
    if (err) {
      res.status(404).send("Username not found");
    } else {
      res.status(200).send(user);
    }
  });
};
exports.logout = function(req, res) {
  Users.findOne({
    UserName: req.body.UserName
  }).exec(function(err, user) {
    if (err) {
      res.send("UserName Not found!");
    } else {
      console.log(user);
      res.json(user);
    }
  });
};
exports.encryptPassword = Password => {};

exports.validatePassword = function(req, res) {};
