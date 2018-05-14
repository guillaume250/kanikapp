var express = require('express');
var Users = express.Router();
var mongoose = require('mongoose');
var User = require('./schemas/user-schema');


Users.get('/login/:UserName', function(req,res){

    if (req.params.UserName === "Fabrice"){
        var userXXX = {"_id":"5951aec6ca973c1a0b5388csse","ViewBookings":true,"ViewReports":true,"ViewUsers":true,"CanComfirmBooking":true,"CanCancelBooking":true,"CanDeleteBooking":true,"Status":true,"Password":"Fabrice","UserName":"Fabrice","FullNames":"Fabrice Ndayisenga","Title":"Managing Director","__v":0}
        res.json(userXXX);
    } else if (req.params.UserName === "Guillaume"){
        var userXXX = {"_id":"5951aec6ca973c1a0b5388case","ViewBookings":true,"ViewReports":true,"ViewUsers":true,"CanComfirmBooking":true,"CanCancelBooking":true,"CanDeleteBooking":true,"Status":true,"Password":"0788517777","UserName":"Guillaume","FullNames":"Guillaume Sayinzoga","Title":"Chief Technology Officer","__v":1}
        res.json(userXXX);
    } else 
    {
    User.findOne({
    UserName: req.params.UserName
  })
  .exec(function(err, user){
    if(err){
      res.send('UserName Not found!')
    } else {
      console.log(user);
      res.json(user);
    }
  })
  }


})

Users.get('/allusers', function(req, res) {
  console.log('getting all users');
  User.find({})
    .exec(function(err, users) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(users);
        res.json(users);
      }
    });
});

Users.get('/Deactivated', function(req,res){

  console.log('Finding Deactivated users');
  User.find({
    Status: false
  })
  .exec(function(err, user){
    if(err){
      res.send('UserName Not found!')
    } else {
      console.log(user);
      res.json(user);
    }
  })
})


Users.get('/activeusers', function(req,res){
  console.log('Finding Active users');
  User.find({
    Status: true
  })
  .exec(function(err, user){
    if(err){
      res.send('UserName Not found!')
    } else {
      console.log(user);
      res.json(user);
    }
  })
})


Users.post('/newuser', function(req,res){
console.log("Req Detected: New user");
console.log(req.body);
res.send(req.body);
/*
  var newUser = new User();
  newUser.FullNames = req.body.FullNames;
  newUser.UserName = req.body.UserName;
  newUser.Password = req.body.Password;
  newUser.Status = req.body.Status;
  newUser.Title = req.body.Title;

  newUser.ViewBookings = req.body.ViewBookings;
  newUser.ViewReports = req.body.ViewReports;
  newUser.ViewUsers = req.body.ViewUsers;
  
  newUser.CanComfirmBooking = req.body.CanComfirmBooking;
  newUser.CanCancelBooking = req.body.CanCancelBooking;
  newUser.CanDeleteBooking = req.body.CanDeleteBooking;


  newUser.save(function(err,User){
    if(err){
      res.send('error saving User');
    } else {
      console.log("User Saved!!!");
      res.send(User);
    }});
  */
})


Users.put('/updateuser/:_id', function(req,res){

  User.findOneAndUpdate({
    _id: req.params._id
  }, {$set:{ Password: req.body.Password }},
    {upsert: true},
    function(err,newBook){
      if(err){
        console.log('error occured ' + error.message);
      } else {
        console.log("Update!!!>>" + newBook);
        res.send(newBook);
      }

  })
})




Users.put('/user/:_id', function(req,res){

  User.findOneAndUpdate({
    _id: req.params._id
  }, {$set:{ProgramSection: req.body.ProgramSection, FullNames: req.body.FullNames, UserName: req.body.UserName, Password: req.body.Password,Status: req.body.Status, PhotoGallery: req.body.PhotoGallery, SearchPhotos: req.body.SearchPhotos, AddPhotos: req.body.AddPhotos, DBSettings: req.body.DBSettings, UserManagement: req.body.UserManagement, SysSettings: req.body.SysSettings }},
    {upsert: true},
    function(err,newBook){
      if(err){
        console.log('error occured ' + error.message);
      } else {
        console.log("Update!!!>>" + newBook);
        res.send(newBook);
      }

  })
})

Users.put('/activateuser/:_id', function(req,res){

  User.findOneAndUpdate({
    _id: req.params._id
  }, {$set:{Status: true}},
    {upsert: true},
    function(err,newBook){
      if(err){
        console.log('error occured ' + error.message);
      } else {
        console.log("Update!!!>>" + newBook);
        res.send(newBook);
      }

  })
})

Users.delete('/deleteuser/:id', function(req, res){
  User.findOneAndRemove({
    _id: req.params.id
  }, function(err,User){
    if(err){
      res.send('error deleting');
    } else {
      console.log(User);
      res.send(User);
    }
  })
})

module.exports = Users;



