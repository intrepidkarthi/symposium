const sql = require("./database.js");

// constructor
const Event = function(newEvent) {
  this.event_title = newEvent.event_title;
  this.event_desc = newEvent.event_desc;
  this.event_ticket = newEvent.event_ticket;
  this.event_participants = newEvent.event_participants;
  this.event_banner_img = newEvent.event_banner_img;
  this.event_organiser_id = newEvent.event_organiser_id;
  this.event_type_id = newEvent.event_type_id;
  this.event_time = newEvent.event_time;
  this.event_venue = newEvent.event_venue;
};



Event.create = (newEvent, result) => {
  sql.query("INSERT INTO events SET ?", newEvent, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Event: ", { id: res.insertId, ...newEvent });
    result(null, { id: res.insertId, ...newEvent });
  });
};

Event.findById = (EventId, result) => {
  sql.query(`SELECT * FROM events WHERE event_id = ${EventId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Event: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Event with the id
    result({ kind: "not_found" }, null);
  });
};

Event.getAll = result => {
  sql.query("SELECT * FROM events", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Events: ", res);
    result(null, res);
  });
};

Event.updateById = (id, Event, result) => {
  sql.query(
    "UPDATE events SET event_title = ?, event_desc = ?, event_ticket = ?, event_participants = ?, event_banner_img = ?, event_organiser_id = ?, event_type_id = ?, event_time = ?, event_venue = ? WHERE event_id = ?",
    [Event.event_title, Event.event_desc, Event.event_ticket,Event.event_participants,Event.event_banner_img,Event.event_organiser_id,Event.event_type_id,Event.event_time,Event.event_venue, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Event with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Event: ", { id: id, ...Event });
      result(null, { id: id, ...Event });
    }
  );
};

Event.remove = (id, result) => {
  sql.query("DELETE FROM events WHERE event_id = ?", id, (err, res) => {
    if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Event with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted event with id: ", id);
      result(null, res);
    });
  };
  
  Event.removeAll = result => {
    sql.query("DELETE FROM events", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} events`);
      result(null, res);
    });
  };
  
  module.exports = Event;