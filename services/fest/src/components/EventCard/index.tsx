import React from "react";

//Components
import { Card } from "react-bootstrap";

//Styles
import "./styles.scss";

type EventCardProps = {
  imgUrl?: string;
};

function EventCard({ imgUrl }: EventCardProps) {
  return (
    <Card style={{ width: "18rem", cursor: "pointer" }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <div className="card-detail-meta">
          <span>SUN 09 FEB</span>
          <span className="inline-block">
            <span className="session">MUSIC</span>
          </span>
        </div>
        <Card.Title className="event-card-title">Event Title</Card.Title>
        <Card.Text className="event-card-description">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Description</Button> */}
      </Card.Body>
    </Card>
  );
}

export default EventCard;
