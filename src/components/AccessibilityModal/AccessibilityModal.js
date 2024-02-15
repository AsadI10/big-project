// import { useContext } from 'react';
import React from 'react';
import Modal from 'react-bootstrap/Modal'; //using react-bootstrap for modal functionality
import './AccessibilityModal.css';
// import { ThemeContext } from '../contexts/ThemeContext.js'
import useLocalStorage from 'use-local-storage';

const AccessibilityModal = ({ show, onHide }) => {
  // const { isDarkThemeEnabled, toggleDarkTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className='modal-title-custom'>Accessibility Adjustments</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {/* <button className='button-square' onClick={toggleDarkTheme}>
          {isDarkThemeEnabled ? 'Disable Dark Theme' : 'Enable Dark Theme'}
        </button> */}
    <div className='theme-Toggle' data-theme={theme} >
        {/* <button>Light Theme</button> */}
        <i onClick={switchTheme} className='fas fa-toggle-on'>Dark Theme</i>
    </div>
      </Modal.Body>
    </Modal>
  );
};

export default AccessibilityModal;