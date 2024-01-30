import React from 'react';
import "./NavBar.css";
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/logo.jpg'

function NavBar() {
  return (
    <div className='nav'>
    <Nav variant="tabs" defaultActiveKey="/home">
    <img className="logo" src={logo} alt="Logo" />
      <Nav.Item>
        <Nav.Link eventKey="link-3">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Contact Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Plan your Visit</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>

  );
}

export default NavBar;