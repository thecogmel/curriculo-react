import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// import { Container } from './styles';
import logo from '../../assets/brasao.png';

function NavbarTads() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top mx-3"
        />
        TADS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/news">Notícias</Nav.Link>
          <Nav.Link href="/calendar">Calendário</Nav.Link>
          <Nav.Link href="/pedagogic">Projeto pedagógico</Nav.Link>
          <Nav.Link href="/contacts">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarTads;
