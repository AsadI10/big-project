import React from 'react';
import Modal from 'react-bootstrap/Modal'; //using react-bootstrap for modal functionality
import './AccessibilityModal.css';

const AccessibilityModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className='modal-title-custom'>Accessibility Adjustments</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* The body of the modal with accessibility options */}
        {/* Implement your accessibility features here */}
      </Modal.Body>
    </Modal>
  );
};

export default AccessibilityModal;