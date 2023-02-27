import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="">Athi Fashions</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="p-3" to="/">Home</Link>
          <Link className="p-3" to="/products">Products</Link>
          <Link className="p-3" to="/cart">Cart</Link>
          <Link className="p-3" to="/login">LogIn</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
