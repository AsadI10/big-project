// import { useContext } from 'react';
import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'; //using react-bootstrap for modal functionality
import './AccessibilityModal.css';
// import { ThemeContext } from '../contexts/ThemeContext.js'
import useLocalStorage from 'use-local-storage';

const AccessibilityModal = ({ show, onHide }) => {
// const { isDarkThemeEnabled, toggleDarkTheme } = useContext(ThemeContext);
const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

// Define the available background colors
const backgroundColors = ['#FFFFFF', '#0000FF', '#800080', '#FF0000', '#00FF00', '#FFFF00', '#000000'];

     // State to hold the selected background color
const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
}

// Function to change the background color
const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
    document.body.style.backgroundColor = color;
};

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
     {/* Color selection */}
     <div className="color-selector-container">
          <p>Adjust Background Colors</p>
          <div className="color-options">
            {backgroundColors.map((color, index) => (
              <button
                key={index}
                style={{
                  backgroundColor: color,
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  margin: '0 5px',
                }}
                onClick={() => changeBackgroundColor(color)}
                aria-label={`Change background color to ${color}`}
              />
            ))}
          </div>
          <button onClick={() => onHide()}>Cancel</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AccessibilityModal;