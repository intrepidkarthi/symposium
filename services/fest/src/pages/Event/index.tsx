import React, { useState } from "react";

//Components
import { Header, RegistrationModal, Footer } from "components";
import { Container, Col, Row, Card, Button } from "react-bootstrap";

//Styles
import "./styles.scss";

const styles = {
  removeMargin: {
    marginRight: "20px",
    marginLeft: "20px"
  }
};

function Event() {
  const [show, setShow] = useState(false);
  const hideRegistrationModal = () => setShow(false);
  const showRegistrationModal = () => setShow(true);
  return (
    <div>
      <RegistrationModal show={show} hideModal={hideRegistrationModal} />
      <Header showModal={showRegistrationModal} />
      <div
        className="event-banner"
        style={{
          backgroundImage: `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4433051917533.58fe88c814d2d.jpg"})`
        }}
      ></div>
      <Container fluid style={{ margin: "20px 0" }}>
        <Row>
          <Col xs={12} md={4}>
            <Card className="book-now-card">
              <Card.Img
                variant="top"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/97074490017985.5e0a1f0560faa.jpg"
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button block variant="primary" onClick={showRegistrationModal}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8}>
            <div>
              <h3>Event Description</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. <br />
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
                <br />
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Event;
