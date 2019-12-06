const mongoose = require("mongoose");
const Reserve = require("../databases/mongodb/models/reservation");

// API
exports.api = {};

exports.api.list = function(req, res) {
  console.log(Reserve);
  Reserve.find({}).exec(function(err, Reserves) {
    if (err) {
      res.send("error occured");
    } else {
      console.log(Reserves);
      res.json(Reserves);
    }
  });
};

exports.api.new = function(req, res) {
  const newReserve = new Reserve();
  newReserve.Names = req.body.Names;
  newReserve.Phone = req.body.Phone;
  newReserve.CarInfos = req.body.CarInfos;
  newReserve.Service = req.body.Service;
  newReserve.ReserveDate = req.body.ReserveDate;
  newReserve.Status = req.body.Status;
  newReserve.Address = req.body.Address;
  newReserve.request_date = Date();

  newReserve.save(function(err, Reserve) {
    if (err) {
      res.send("error saving Reserve");
    } else {
      console.log("Reserve Saved!!!");
      console.log(Reserve);
      res.send(Reserve);
    }
  });
};

exports.api.update = function(req, res) {
  console.log("Updating Reserveing");
  Reserve.findOneAndUpdate(
    {
      _id: req.body._id
    },
    { $set: { Status: req.body.Status } },
    { upsert: true },
    function(err, Reserve) {
      if (err) {
        console.log("error occured " + error.message);
      } else {
        console.log("Reserveing status updated");
        console.log(Reserve);

        res.send(Reserve);
      }
    }
  );
};

exports.api.delete = function(req, res) {
  console.log(req.body);
  console.log("deleting Reserveing");
  Reserve.findOneAndRemove(
    {
      _id: req.body._id
    },
    function(err, Reserve) {
      if (err) {
        res.send("error deleting");
      } else {
        console.log(Reserve);
        res.send(Reserve);
      }
    }
  );
};
