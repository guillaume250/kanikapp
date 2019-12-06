var User = require("../databases/mongodb/models/bookings");

// API
exports.api = {};

exports.api.login = function(req, res) {
  if (req.params.UserName === "Fabrice") {
    var userXXX = {
      _id: "5951aec6ca973c1a0b5388csse",
      ViewBookings: true,
      ViewReports: true,
      ViewUsers: true,
      CanComfirmBooking: true,
      CanCancelBooking: true,
      CanDeleteBooking: true,
      Status: true,
      Password: "Fabrice",
      UserName: "Fabrice",
      FullNames: "Fabrice Ndayisenga",
      Title: "Managing Director",
      __v: 0
    };
    res.json(userXXX);
  } else if (req.params.UserName === "Guillaume") {
    var userXXX = {
      _id: "5951aec6ca973c1a0b5388case",
      ViewBookings: true,
      ViewReports: true,
      ViewUsers: true,
      CanComfirmBooking: true,
      CanCancelBooking: true,
      CanDeleteBooking: true,
      Status: true,
      Password: "0788517777",
      UserName: "Guillaume",
      FullNames: "Guillaume Sayinzoga",
      Title: "Chief Technology Officer",
      __v: 1
    };
    res.json(userXXX);
  } else {
    User.findOne({
      UserName: req.params.UserName
    }).exec(function(err, user) {
      if (err) {
        res.send("UserName Not found!");
      } else {
        console.log(user);
        res.json(user);
      }
    });
  }
};

exports.api.list = function(req, res) {
  console.log("getting all users");
  User.find({}).exec(function(err, users) {
    if (err) {
      res.send("error occured");
    } else {
      console.log(users);
      res.json(users);
    }
  });
};
