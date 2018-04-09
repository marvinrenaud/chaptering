// Dependencies required
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");

// Initialize Express
var app = express();
var PORT = process.env.PORT || 8080;

// Make public a static dir
app.use(express.static(path.join(__dirname, '/')));

// ROUTER
require("./routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
