import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";
export const NavBar = () => (
  <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Game Services</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#Dofus">Dofus</Nav.Link>
          <Nav.Link href="#DofusTouch">Dofus Touch</Nav.Link>
          <Nav.Link href="#DofusRetro">Dofus Retro</Nav.Link>
          <Nav.Link href="#DofusWakfu">Wakfu</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  </>
);
