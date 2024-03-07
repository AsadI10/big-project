import React from 'react';
import "./NavBar.css";
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/logo.jpg'
import { IoAccessibility } from "react-icons/io5";
import AccessibilityModal from '../AccessibilityModal/AccessibilityModal';
import { Link } from 'react-router-dom';

function NavBar() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='nav'>
    <Nav variant="tabs" defaultActiveKey="/home">
        <img className="logo" src={logo} alt="Logo" />
      <Nav.Item>
        {/* <Nav.Link eventKey="link-3">Home</Nav.Link> */}
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {/* <Nav.Link eventKey="link-1">Contact Us</Nav.Link> */}
        <Nav.Link as={Link} to="/ContactUs.js">Contact Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Plan your Visit</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <IoAccessibility className="icon-style" onClick={() => setModalShow(true)} />
      </Nav.Item>
    </Nav>
    <AccessibilityModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>

  );
}

export default NavBar;