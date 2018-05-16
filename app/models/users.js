var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    FullNames: String,
    UserName: String,
    Password: String,
    Status: Boolean,
    Title:String,
//>> User Permisions Tabs <<//
    ViewBookings: Boolean,
    ViewReports: Boolean,
    ViewUsers: Boolean,
//>> User Permisions Controlls <<//
    CanComfirmBooking: Boolean,
    CanCancelBooking: Boolean,
    CanDeleteBooking: Boolean,

});

module.exports = mongoose.model('User', UserSchema);
