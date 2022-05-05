import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./NavBar.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
const navBarInitialState = {};

const NavBar = (props) => {
  const [state, setstate] = useState(navBarInitialState);
  useEffect(() => {}, []);
  return (
    <div className={style.NavBar} data-testid="NavBar">
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Meme Generator</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#new">New</Nav.Link>
      <Nav.Link href="#edit">Edit/1</Nav.Link>
      <Nav.Link href="#pircing">Thumbnail</Nav.Link>
      <Nav.Link href="#thumbnail">ThumbnailPDF</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  );
};

NavBar.propTypes = {};
NavBar.defaultProps = {};

export default NavBar;