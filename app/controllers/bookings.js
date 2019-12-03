var Book = require("../models/bookings")

// API
exports.api = {}

exports.api.list = function(req, res) {
  console.log("getting all books")
  Book.find({}).exec(function(err, books) {
    if (err) {
      res.send("error occured")
    } else {
      console.log(books)
      res.json(books)
    }
  })
}

exports.api.new = function(req, res) {
  var newBook = new Book()
  newBook.Names = req.body.Names
  newBook.Phone = req.body.Phone
  newBook.CarInfos = req.body.CarInfos
  newBook.Service = req.body.Service
  newBook.BookDate = req.body.BookDate
  newBook.Status = req.body.Status
  newBook.Address = req.body.Address
  newBook.request_date = Date()

  newBook.save(function(err, book) {
    if (err) {
      res.send("error saving book")
    } else {
      console.log("Book Saved!!!")
      console.log(book)
      res.send(book)
    }
  })
}

exports.api.update = function(req, res) {
  console.log("Updating booking")
  Book.findOneAndUpdate(
    {
      _id: req.body._id
    },
    { $set: { Status: req.body.Status } },
    { upsert: true },
    function(err, book) {
      if (err) {
        console.log("error occured " + error.message)
      } else {
        console.log("Booking status updated")
        console.log(book)

        res.send(book)
      }
    }
  )
}

exports.api.delete = function(req, res) {
  console.log(req.body)
  console.log("deleting booking")
  Book.findOneAndRemove(
    {
      _id: req.body._id
    },
    function(err, Book) {
      if (err) {
        res.send("error deleting")
      } else {
        console.log(Book)
        res.send(Book)
      }
    }
  )
}
