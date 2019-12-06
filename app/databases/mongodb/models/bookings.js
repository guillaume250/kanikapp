var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  Names: String,
  Phone: String,
  CarInfos: String,
  Service: String,
  BookDate: Date,
  Status: String,
  Address: String,
  request_date: Date
});

module.exports = mongoose.model("Book", BookSchema);
