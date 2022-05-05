import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./NavBar.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {LinkContainer} from 'react-router-bootstrap'
const navBarInitialState = {};

const NavBar = (props) => {
  const [state, setstate] = useState(navBarInitialState);
  useEffect(() => {}, []);
  return (
    <div className={style.NavBar} data-testid="NavBar">
     <Navbar bg="dark" variant="dark">
    <Container>
    <LinkContainer to='/'><Navbar.Brand>Meme Generator</Navbar.Brand></LinkContainer>
    <Nav className="me-auto">
      <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
      <LinkContainer to='/new'><Nav.Link>New</Nav.Link></LinkContainer>
      <LinkContainer to='/edit'><Nav.Link>Edit/1</Nav.Link></LinkContainer>
      <LinkContainer to='/thumbnail'><Nav.Link>Thumbnail</Nav.Link></LinkContainer>
      <LinkContainer to='/PDFthumbnail'><Nav.Link>PDFThumbnail</Nav.Link></LinkContainer>
    </Nav>
    </Container>
  </Navbar>
    </div>
  );
};

NavBar.propTypes = {};
NavBar.defaultProps = {};

export default NavBar;