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

  //function for resetting all settings to default
  const resetSettings = () => {
    setTitleColor('#000000');
    setBackgroundColor('#FFFFFF');
    setIsTextMagnified(false);
    setIsLowSaturation(false);
    setTextColor('#000000');
    setTheme('light');
  }
  //This is for global styles
  document.body.style.color = '#000000';
  document.body.style.backgroundColor = '#FFFFFF';
  document.body.classList.remove('text-magnified', 'magnify', 'low-saturation', 'dark-theme');

  //this is the satement function 
  const showAccessibilityStatement = () => {
    alert("Accessibility features help users with different abilities navigate and use the software effectively. For assistance, please reach out to our support team.");
  };


  // New state for title color
  const [titleColor, setTitleColor] = useState('#000000');

  // Function to change the title color
  const changeTitleColor = (color) => {
    setTitleColor(color);
    // Apply the color to title elements
    const titleElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    titleElements.forEach(element => {
      element.style.color = color;
    });
  };

  //adding text colors
  const titleColors = ['#34568B', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7'];

  // function for magnifier
  const [isTextMagnified, setIsTextMagnified] = useState(false);

  // Function to toggle magnification on and off
  const toggleTextMagnification = () => {
    setIsTextMagnified(!isTextMagnified);
  };

  useEffect(() => {
    const textElements = document.querySelectorAll('.modal-body *');
    textElements.forEach(element => {
      if (isTextMagnified) {
        element.classList.add('text-magnified', 'magnify'); // Add classes to magnify text
      } else {
        element.classList.remove('text-magnified', 'magnify'); // Remove classes to return to normal
      }
    });
  }, [isTextMagnified]);

  //This is code for the narrator
  const [synth] = useState(window.speechSynthesis);
  const [utterance] = useState(new SpeechSynthesisUtterance());
  const getAllText = () => {
    const bodyText = document.body.innerText; // or document.querySelector('.your-container').innerText;
    return bodyText;
  };

  const startNarration = () => {
    utterance.text = getAllText();
    synth.speak(utterance);
  };

  const pauseNarration = () => {
    synth.pause();
  };

  const stopNarration = () => {
    synth.cancel();
  };

  // Add or remove the 'body-scroll' class based on the 'show' prop//
  //This is for the page to able to scroll and allow when component is open to scroll.
  useEffect(() => {
    if (show) {
      document.body.classList.add('body-scroll');
    } else {
      document.body.classList.remove('body-scroll');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('body-scroll');
    };
  }, [show]);

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
    // The cleanup is the function that runs when the `isLowSaturation` state changes
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
    const titleElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6 , p, Button, title, Modal.Title, nav, span'); // Add other selectors if needed
    titleElements.forEach(element => {
      element.style.color = color;
    }); // this code is for all the body   document.body.style.color = color;
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
      backdrop={false}
    >
      {/* <Modal show={show} onHide={onHide} centered> Thius is centered*/}
      <Modal.Header closeButton>
        <Modal.Title className='modal-title-custom'>Accessibility Adjustments</Modal.Title>
        <div className="header-buttons-container">
          <button onClick={resetSettings} className="reset-button">
            Reset Settings
          </button>
          <button onClick={showAccessibilityStatement} className="statement-button">
            Statement
          </button>
        </div>
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
        <div className="narration-container">
          <p className="narration-title">Narration Controls</p>
          <div className="narration-controls">
            <button className="narration-button" onClick={startNarration}>Start</button>
            <button className="narration-button" onClick={pauseNarration}>Pause</button>
            <button className="narration-button" onClick={stopNarration}>Stop</button>
          </div>
        </div>
        <div className="text-magnification-container">
          <button onClick={toggleTextMagnification} className="text-magnification-button">
            {isTextMagnified ? 'Turn Off Magnification' : 'Turn On Magnification'}
          </button>
        </div>
        <div className="title-color-selector-container">
          <p>Adjust Title Colors</p>
          <div className="color-options">
            {titleColors.map((color, index) => (
              <button
                key={index}
                style={{
                  backgroundColor: color,
                  width: '30px',
                  borderRadius: '50%',
                  height: '30px',
                  cursor: 'pointer',
                  border: 'none',
                  margin: '0 5px',
                }}
                aria-label={`Change title color to ${color}`}
                onClick={() => changeTitleColor(color)}
              />
            ))}
          </div>
          <button onClick={onHide}>Cancel</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AccessibilityModal;