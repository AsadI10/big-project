import React from 'react';
import "./NavBar.css";
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <div className='nav'>
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
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