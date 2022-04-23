/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import axios from 'axios';
import './Header.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */

const Header = () => {
  const navigate = useNavigate()
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const handleLogout = () => {
    axios
      .post('/user/logout')
      .then((res) => {
        localStorage.removeItem('userInfo');
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
            {userInfo ? (
              <NavDropdown
                title={userInfo.data.firstName}
                id="basic-nav-dropdown"
                // className="bg-primary"
              >
                <NavDropdown.Item
                  id='dropdown-item'
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <Nav.Link id='nav-dropdown-item' >Profile</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  id='dropdown-item'
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <Nav.Link id='nav-dropdown-item' >Cart</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  id='dropdown-item'
                  onClick={ handleLogout}
                >
                  <Nav.Link id='nav-dropdown-item' >Logout</Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
            <Nav.Link>
            <Link to="/Login" id="nav-login">Login</Link>
            </Nav.Link>
            )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;