import React, { } from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setisLoggeIn } from "../Data/UserSlice";

function NavigationBar() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const users = useSelector((state) => state.users);
  const isLoggedIn = users.isLoggedIn;
  return (
    <Navbar expand="lg" className="bg-light bg-body-tertiary">
      <Link className="text-dark navbar-brand" to="/">
        ATHI FASHIONS
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navigation ml-auto">
          <Link className="nav-link mx-2 text-dark" to="/">
            Home
          </Link>
          <Link className="nav-link mx-2 text-dark" to="/products">
            Products
          </Link>
          <Link className="nav-link mx-2 text-dark" to="/cart">
            Cart
          </Link>
          <Link
            className={`${
              isLoggedIn ? "d-none" : "d-block nav-link mx-2 text-dark"
            }`}
            to="/login"
          >
            Login
          </Link>
          <Dropdown
            className={`${
              isLoggedIn ? "d-inline mx-2 dropdown text-dark" : "d-none"
            }`}
          >
            <Dropdown.Toggle className="dropdown">
              <FaUser />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/checkout");
                }}
              >
                Check out
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setisLoggeIn(false))
                  navigate("/");
                }}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
