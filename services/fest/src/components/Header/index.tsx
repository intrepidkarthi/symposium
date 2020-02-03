import React from "react";

//Components
import { Navbar, Nav, Button } from "react-bootstrap";

//Styles
import "./styles.scss";

type HeaderProps = {
  showModal?: () => void;
};

function Header({ showModal }: HeaderProps) {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      className="header"
    >
      <Navbar.Brand href="#home">Symposium</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Events">Events</Nav.Link>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Button size="sm" variant="outline-primary" onClick={showModal}>
            Registration
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
