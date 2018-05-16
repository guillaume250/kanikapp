'use strict';
const express = require('express');
//var methodOverride  = require('method-override');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const app = express();
//var db = 'mongodb://guil12:guil12@ds041821.mlab.com:41821/kanikadb';
var db_alt = 'mongodb://fabrice:fabrice@ds127065.mlab.com:27065/kanikapp'
mongoose.connect(db_alt);

//app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
extended:true
}))
app.use('/assests', express.static(__dirname + '/public'));
//app.use(favicon(__dirname + '/public/img/favicon.ico'));

// Routes
require('./app/routes')(app);
if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Kanika listening on port ${port}`);
    console.log(`Kanika url: http://localhost:5000/`);
    console.log(`Big Shaq... You don't know`);

  });
  // [END server]
}
