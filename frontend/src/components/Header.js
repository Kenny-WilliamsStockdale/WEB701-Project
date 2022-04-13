/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import './Header.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */

const Header = () => {
  // const navigate = useNavigate()
  // const userInfo = localStorage.userInfo  // checks if userInfo exists in localStorage. If exists return the user data. If not return null
    // ? JSON.parse(localStorage.userInfo).user
  //   : null;
  return (
    <Navbar bg="primary-main" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className='brand'>Stuff and Things Charity</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link>
            <Link to="/Product" id="nav-product">Product</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/Cart" id="nav-cart">Cart</Link>
            </Nav.Link>
            {/* {userInfo ? (
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
            ) : ( */}
            <Nav.Link>
            <Link to="/Login" id="nav-login">Login</Link>
            </Nav.Link>
            {/* ) */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;