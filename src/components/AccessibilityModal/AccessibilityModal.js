// import { useContext } from 'react';
import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'; //using react-bootstrap for modal functionality
import './AccessibilityModal.css';
// import { ThemeContext } from '../contexts/ThemeContext.js'
import useLocalStorage from 'use-local-storage';

//This is for the text-to-speech API
const speakText = (text) => {
  if ('speechSynthesis' in window) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  } else {
    // Handle the error case here
    console.error("Speech synthesis not supported in this browser.");
  }
};

const AccessibilityModal = ({ show, onHide }) => {
// const { isDarkThemeEnabled, toggleDarkTheme } = useContext(ThemeContext);
const [theme, setTheme] = useLocalStorage('theme', 'light'); // Set a default value for theme

//TextToSpeech
const [inputText, setInputText] = useState('');

// low saturation code
const [isLowSaturation, setIsLowSaturation] = useState(false);
const toggleLowSaturation = () => {
  const shouldBeLowSaturation = !isLowSaturation;
  setIsLowSaturation(shouldBeLowSaturation);
  document.body.classList.toggle('low-saturation', shouldBeLowSaturation);
};
useEffect(() => {
  // The cleanup function runs when the `isLowSaturation` state changes
  // or when the component is unmounted.
  return () => {
    document.body.classList.remove('low-saturation');
  };
}, [isLowSaturation]);

//Implementing adjust text colors
const textColors = ['#34568B', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7'];
const [textColor, setTextColor] = useState('#000000'); // Default text color
const changeTextColor = (color) => {
  setTextColor(color);
  document.body.style.color = color; // This will change the text color of the entire body
};
useEffect(() => {
  document.documentElement.style.setProperty('--text-color', textColor);
}, [textColor]);


// Define the available background colors
const backgroundColors = ['#FFFFFF', '#0000FF', '#800080', '#FF0000', '#00FF00', '#FFFF00', '#000000'];

// State to hold the selected background color
const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

useEffect(() => {
  // Apply the theme when the component mounts
  document.body.classList.toggle('dark-theme', theme === 'dark');
}, [theme]); // Depend on theme to re-run the effect

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
  <Modal 
  show={show} 
  onHide={onHide} 
  centered 
  backdrop={false} // This allows interaction with the page behind the modal
>
{/* <Modal show={show} onHide={onHide} centered> Thius is centered*/} 
  <Modal.Header closeButton>
    <Modal.Title className='modal-title-custom'>Accessibility Adjustments</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* <button className='button-square' onClick={toggleDarkTheme}>
          {isDarkThemeEnabled ? 'Disable Dark Theme' : 'Enable Dark Theme'}
        </button> */}
<div className='theme-Toggle' data-theme={theme} >
        {/* <button>Light Theme</button> */}
        <i onClick={switchTheme} className='fas fa-toggle-on'>Dark Contrast</i>
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
      <button onClick={toggleLowSaturation} className="square-button">
          {isLowSaturation ? 'Normal Saturation' : 'Low Saturation'}
      </button>
<div className="text-color-selector-container">
  <p>Adjust Text Colors</p>
  <div className="color-options">
    {textColors.map((color, index) => (
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
        onClick={() => changeTextColor(color)}
        aria-label={`Change text color to ${color}`}
      />
    ))}
</div>
  <button className='adjust-color' onClick={onHide}>Cancel</button>
</div>
<div className="text-to-speech-container">
    <input
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder="Enter text to read aloud"
      className="text-to-speech-input"
    />
    <button onClick={() => speakText(inputText)} className="text-to-speech-button">
      Speak
    </button>
</div>
      </Modal.Body>
    </Modal>
  );
};

export default AccessibilityModal;