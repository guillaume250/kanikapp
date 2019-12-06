const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  FullNames: String,
  UserName: String,
  Password: String,
  Status: Boolean,
  Title: String,
  permissionLevel: Number,
  //>> User Permisions Tabs <<//
  ViewBookings: Boolean,
  ViewReports: Boolean,
  ViewUsers: Boolean,
  //>> User Permisions Controlls <<//
  CanComfirmBooking: Boolean,
  CanCancelBooking: Boolean,
  CanDeleteBooking: Boolean
});

module.exports = mongoose.model("User", UserSchema);
