const express = require("express");
const config = require("./config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
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
app.use("/api/", function(req, res, next) {
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
    res.status(200).send(token);
  } else {
    res.status(401).send("No authorization bearer found");
  }
});

// Routes
require("./app/routes")(app);

const server = app.listen(config.server.port, () => {
  const port = server.address().port;
  console.log(`Kanika is listening on port ${port}`);
  console.log(`Kanika url: ${config.server.uri}${port}/`);
});
