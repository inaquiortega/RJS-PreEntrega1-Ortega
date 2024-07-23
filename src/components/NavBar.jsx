import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar className="navbar-color" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#index" className="me-5">
          <img
            alt="Qué Mono!"
            src="src\assets\queLogo.png"
            height="70"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#bolsos" className="mx-2">
            Bolsos
          </Nav.Link>
          <Nav.Link href="#cambiadores" className="mx-2">
            Cambiadores
          </Nav.Link>
          <Nav.Link href="#baberos" className="mx-2">
            Baberos
          </Nav.Link>
          <Nav.Link href="#mantas" className="mx-2">
            Mantas
          </Nav.Link>
          <Nav.Link href="#accesorios" className="mx-2">
            Accesorios
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
