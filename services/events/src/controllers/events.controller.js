const Event = require("../models/events.model.js");



// Create and Save a new Event
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Event
  const eventObject = new Event({
    event_title: req.body.event_title,
    event_desc: req.body.event_desc,
    event_ticket: req.body.event_ticket,
    event_participants: req.body.event_participants,
    event_banner_img: req.body.event_banner_img,
    event_organiser_id: req.body.event_organiser_id,
    event_type_id: req.body.event_type_id,
    event_time: req.body.event_time,
    event_venue: req.body.event_venue
  });

  // Save Event in the database
  Event.create(eventObject, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Event."
      });
    else res.send(data);
  });
};

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
  Event.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Events."
      });
    else res.send(data);
  });
};

// Find a single Event with a EventId
exports.findOne = (req, res) => {
  Event.findById(req.params.eventId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Event with id ${req.params.eventId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Event with id " + req.params.eventId
        });
      }
    } else res.send(data);
  });
};

// Update a Event identified by the EventId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log("Updated Event: ", req.params.eventId);

  Event.updateById(
    req.params.eventId,
    new Event(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Event with id ${req.params.eventId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Event with id " + req.params.eventId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Event with the specified EventId in the request
exports.delete = (req, res) => {
  Event.remove(req.params.eventId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Event with id ${req.params.eventId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Event with id " + req.params.eventId
        });
      }
    } else res.send({ message: `Event was deleted successfully!` });
  });
};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
  Event.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Events."
      });
    else res.send({ message: `All Events were deleted successfully!` });
  });
};