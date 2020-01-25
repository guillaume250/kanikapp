const Users = require("../databases/mongodb/models/users");
const auth = require("../services/auth");
const config = require("../../config");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// API
exports.api = {};

exports.api.list = function(req, res) {
  list(req, res);
};
exports.api.add = function(req, res) {
  createuser(req, res);
};

//Methods that handles APIS
const list = (req, res) => {
  Users.find({}).exec(function(err, users) {
    if (err) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(users);
    }
  });
};

const createuser = (req, res) => {
  bcrypt.hash(req.body.Password, saltRounds).then(function(hash) {
    req.body.Password = hash;
    Users.create(req.body, function(err, user) {
      if (err) {
        res.send("error occured");
      } else {
        res.status(201).send(user);
      }
    });
  });
};

exports.concatnames = (fname, lname) => {
  if (!fname && !lname) {
    return null;
  } else {
    return fname + " " + lname;
  }
};
