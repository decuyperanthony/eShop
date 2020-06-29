// == Import npm
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Import
import './styles.scss';

// == bootstrap
import {
  Button, Navbar, NavDropdown, Nav, Form, FormControl,
} from 'react-bootstrap';
// == Composant
const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">EShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">Profil</Nav.Link>
            <NavDropdown title="Articles" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bracelets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Collier</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Médailles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

// == Export
export default NavBar;
