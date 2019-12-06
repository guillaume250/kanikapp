const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
mongoose.connect(
  keys.db_alt,
  { useNewUrlParser: true }
);

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use("/assests", express.static(__dirname + "/app/client"));

// Routes
require("./app/routes")(app);

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Kanika listening on port ${port}`);
  console.log(`Kanika url: http://localhost:5000/`);
});
