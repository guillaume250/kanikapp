const express = require("express");
const config = require("./config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");
const auth = require("./app/services/auth");
mongoose.connect(
  config.databases.mongodb.local,
  { useNewUrlParser: true }
);

const app = express();
app.use("/assests", express.static(__dirname + "/app/client"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
auth.secureapis(app);

// Routes
require("./app/routes")(app);

const server = app.listen(config.server.port, () => {
  const port = server.address().port;
  console.log(`Kanika is listening on port ${port}`);
  console.log(`Kanika url: ${config.server.uri}${port}/`);
});
