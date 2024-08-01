import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";
export const NavBar = () => (
  <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/category/Dofus">Dofus</Nav.Link>
          <Nav.Link as={NavLink} to="/category/DofusTouch">Dofus Touch</Nav.Link>
          <Nav.Link as={NavLink} to="/category/DofusRetro">Dofus Retro</Nav.Link>
          <Nav.Link as={NavLink} to="/category/Wakfu">Wakfu</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  </>
);
