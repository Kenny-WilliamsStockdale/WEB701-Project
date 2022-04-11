import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import './header.css'

// Defines header component upon being rendered to screens.
const Header = () => {
  const navigate = useNavigate()
  const userInfo = localStorage.userInfo  // checks if userInfo exists in localStorage. If exists return the user data. If not return null
    ? JSON.parse(localStorage.userInfo).user
    : null;
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Stuff and Things Clothing Charity</Link> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/products">Products
            </Nav.Link>
            <Nav.Link href="/cart">My cart
            </Nav.Link>
            {userInfo ? (
              <NavDropdown
                title={userInfo.firstName}
                id="basic-nav-dropdown"
                // className="bg-primary"
              >
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <Nav.Link>Profile</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <Nav.Link>Cart</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    localStorage.removeItem("userInfo");
                    navigate("/");
                  }}
                >
                  <Nav.Link>Logout</Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">Sign In
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
