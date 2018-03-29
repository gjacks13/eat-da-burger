// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static(__dirname + "/public"));

// Setup handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./controllers/burgers_controller.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});