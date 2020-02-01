import React from "react";

//Components
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

//Styles
import "./styles.scss";

function Header() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Symposium</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Events">Events</Nav.Link>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Button size="sm" variant="outline-primary">
            Registration
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
