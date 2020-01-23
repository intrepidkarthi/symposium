
const bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false })


module.exports = app => {
    const events = require("../controllers/events.controller.js");
  
    // Create a new Event
    app.post("/events", urlencodedParser, events.create);
  
    // Retrieve all Events
    app.get("/events", events.findAll);
  
    // Retrieve a single event with eventid
    app.get("/events/:eventId", events.findOne);
  
    // Update an event with event id
    app.put("/events/:eventId", urlencodedParser, events.update);
  
    // Delete an event with eventid
    app.delete("/events/:eventId", events.delete);
  
    // Delete all the events
    app.delete("/events", events.deleteAll);
  };