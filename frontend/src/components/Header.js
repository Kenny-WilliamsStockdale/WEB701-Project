/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, NavLink } from 'react-bootstrap';
import axios from 'axios';
import CartModal from './CartComponent';
import logo from '../Imgs/logo1.png';
import './Header.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */

const Header = () => {
  const navigate = useNavigate()
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/')
  }
  const defaultSet = () => {
    return (<Nav.Link>
      <Link to="/Login" id="nav-login">Login</Link>
    </Nav.Link>)
  }

  const beneficiarySet = () => {
    return (
      <><Nav.Link>
        <Link to="/Product" id="nav-product">Product</Link>
      </Nav.Link><CartModal /><NavDropdown
        title={userInfo.data.firstName}
        id="basic-nav-dropdown"
      >
          <NavDropdown.Item
            id='dropdown-item'
            onClick={() => {
              navigate("/account");
            }}
          >
            <Nav.Link id='nav-dropdown-item'>Profile</Nav.Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            id='dropdown-item'
            onClick={handleLogout}
          >
            <Nav.Link id='nav-dropdown-item' >Logout</Nav.Link>
          </NavDropdown.Item>
        </NavDropdown></>
    )
  }
  const memberSet = () => {
    return (<><Nav.Link>
      <Link to="/addProduct" id="nav-product">Dashboard</Link>
    </Nav.Link>
      <NavDropdown
        title={userInfo.data.firstName}
        id="basic-nav-dropdown">
        <NavDropdown.Item
          id='dropdown-item'
          onClick={() => {
            navigate("/account");
          }}
        >
          <Nav.Link id='nav-dropdown-item'>Profile</Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          id='dropdown-item'
          onClick={handleLogout}
        >
          <Nav.Link id='nav-dropdown-item' >Logout</Nav.Link>
        </NavDropdown.Item>
      </NavDropdown>
    </>)
  }
  const Header = () => {
    return (<Navbar bg="primary-main" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className='brand'>
            <img src={logo} className="brand-img" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {!userInfo ? defaultSet() :
              userInfo.data.isBeneficiary === true ? beneficiarySet() : memberSet()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
  }

  return (
    <>
      {Header()}
    </>
  );
};

export default Header;