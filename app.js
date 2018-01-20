'use strict';

const express = require('express');

const app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model')
var port = 2233;
var db = 'mongodb://guil12:guil12@ds041821.mlab.com:41821/kanikadb';

mongoose.connect(db);

app.set('view engine','ejs');
app.use('/assests', express.static(__dirname + '/public'));

//implemented while posting data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
extended:true
}))

app.get('/', function(req,res){

    res.render('index');
});

app.get('/books', function(req, res) {
  console.log('getting all books');
  Book.find({})
    .exec(function(err, books) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(books);
        res.json(books);
      }
    });
})

app.post('/book', function(req,res){

  var newBook = new Book();
  newBook.Names = req.body.Names;
  newBook.Phone = req.body.Phone;
  newBook.CarInfos = req.body.CarInfos;
  newBook.Service = req.body.Service;
  newBook.BookDate = req.body.BookDate;
  newBook.Status = req.body.Status;

  newBook.save(function(err,book){
    if(err){
      res.send('error saving book');
    } else {
      console.log("Book Saved!!!");
      res.send(book);
    }});
});










if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 2233, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
