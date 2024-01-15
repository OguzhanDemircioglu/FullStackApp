import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Button, Container, Nav, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons/faVideoSlash";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "gold" }}>
          <FontAwesomeIcon icon={faVideoSlash} />
          Gold
        </Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          id="navbarScroll"
        >
          <NavLink className="nav-link" href="/">
            Home
          </NavLink>
          <NavLink className="nav-link" href="/about">
            About
          </NavLink>
          <NavLink className="nav-link" href="/sparePart">
            Yedek Parça
          </NavLink>
          <NavLink className="nav-link" href="/Products">
            Ürünler
          </NavLink>
        </Nav>

        <NavLink className="nav-link" href="/about">
          <Button variant="outline-info" className="me-2">
            Login
          </Button>
        </NavLink>

        <Button variant="outline-info" className="me-2">
          Register
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
