const Users = require("../databases/mongodb/models/users");
const config = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.login = function(req, res) {
  Users.findOne({
    UserName: req.body.UserName
  }).exec(function(err, user) {
    if (err) {
      res.status(500).send("An error occured " + err);
    } else if (user === null) {
      res.status(404).send("Username not found");
    } else {
      //User was found, compare the passwords
      bcrypt.compare(req.body.Password, user.Password).then(function(matches) {
        if (matches) {
          jwt.sign(
            {
              data: {
                _id: user._id,
                Password: user.Password
              }
            },
            config.token.secret,
            { expiresIn: config.token.expiration },
            function(err, token) {
              if (err) {
                res.status(500).send("Couldn't generate token" + err);
              } else {
                res.status(200).send({ FullNames: user.FullNames, token });
              }
            }
          );
        } else {
          res.status(401).send("Incorrect Password");
        }
      });
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
exports.secureapis = app => {
  //API Security checks every route going to /api/
  app.use("/api/", function(req, res, next) {
    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, config.token.secret, function(err, decoded) {
        req.body._user = decoded.data;
        //  res.status(200).send(req.body);
        next();
      });
    } else {
      res.status(401).send("No authorization bearer found");
    }
  });
};
exports.encryptPassword = Password => {};

exports.validatePassword = function(req, res) {};
