const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");


const app = express();

// var corsOptions = {
//   origin: "http://localhost:8001"
// };

// app.use(cors(corsOptions));

// create application/json parser
var jsonParser = bodyParser.json({ type: 'application/*+json' })

// parse requests of content-type: application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Symposium application." });
});

require("./events/routes/events.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port 8000.");
});





