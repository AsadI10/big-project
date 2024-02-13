import { useContext } from 'react';
import React from 'react';
import Modal from 'react-bootstrap/Modal'; //using react-bootstrap for modal functionality
import './AccessibilityModal.css';
import { ThemeContext } from '../contexts/ThemeContext.js'

const AccessibilityModal = ({ show, onHide }) => {
  const { isDarkThemeEnabled, toggleDarkTheme } = useContext(ThemeContext);
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className='modal-title-custom'>Accessibility Adjustments</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <button className='button-square' onClick={toggleDarkTheme}>
          {isDarkThemeEnabled ? 'Disable Dark Theme' : 'Enable Dark Theme'}
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default AccessibilityModal;