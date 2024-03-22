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

  //functionalit of big cursor
  const [bigCursor, setBigCursor] = useState(false);
  const toggleBigCursor = () => {
    setBigCursor((prev) => !prev);
  };
  useEffect(() => {
    if (bigCursor){
      document.body.classList.add('big-cursor');
    } else{
      document.body.classList.remove('big-cursor');
    }
  }, [bigCursor]);

  //highlight the titles functionality
  const [highlightTitles, setHighlightTitles] = useState(false);
  const toggleHighlightTitles = () => {
    setHighlightTitles(!highlightTitles);
  };
  useEffect(() => {
    const titleElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (highlightTitles){
      titleElements.forEach(element => {
        element.classList.add('highlight'); //class that highlights the ttiles
      });
    } else{
      titleElements.forEach(element => {
        element.classList.remove('highlight');
    });
  }
}, [highlightTitles]);

  // monochrome functionality
  const [isMonochrome, setIsMonochrome] = useState(false);
  const toggleMonochrome = () => {
    setIsMonochrome(prevIsMonochrome => !prevIsMonochrome);
  };
  useEffect(() => {
    if (isMonochrome) {
      document.body.style.filter = 'grayscale(100%)';
    } else {
      document.body.style.filter = 'none';
    }
  }, [isMonochrome]);


  //define the Profile states
  const [adhdFriendly, setAdhdfriendly] = useState(false);

  // Function to create the focus box
  const createFocusBox = () => {
    const newFocusBox = document.createElement('div');
    newFocusBox.id = 'focus-box';
    newFocusBox.style.position = 'fixed';
    newFocusBox.style.border = '2px solid blue';
    newFocusBox.style.zIndex = 1000;
    newFocusBox.style.pointerEvents = 'none'; //clicks pass through the box
    newFocusBox.style.width = '1300px'; // set the size of the focus box
    newFocusBox.style.height = '120px';
    newFocusBox.style.display = 'none'; //focus box hidden
    document.body.appendChild(newFocusBox);
    return newFocusBox;
  };
  // Function to position the focus box based
  const onMouseMove = (e) => {
    const focusBox = document.getElementById('focus-box');
    if (focusBox) {
      focusBox.style.left = `${e.clientX - 100}px`; // centers the box based on its width
      focusBox.style.top = `${e.clientY - 50}px`; // centers the box based on its height
      focusBox.style.display = 'block';
    }
  };
  // Function to toggle the ADHD Profile
  const toggleAdhdFriendly = () => {
    setAdhdfriendly((prev) => {
      if (!prev) {
        // If turning on, create the focus box
        createFocusBox();
        window.addEventListener('mousemove', onMouseMove);
      } else {
        // If turning off remove the focus box
        const focusBox = document.getElementById('focus-box');
        if (focusBox) {
          focusBox.remove();
        }
        window.removeEventListener('mousemove', onMouseMove);
      }
      return !prev;
    });
  };
  //clean up on component unmount
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      const focusBox = document.getElementById('focus-box');
      if (focusBox) {
        focusBox.remove();
      }
    };
  }, []);
  // When Friendly Profile is activated:
  const activateADHDFriendly = () => {
    //show the focus box
    const focusBox = document.getElementById('focus-box');
    focusBox.style.display = 'block';
    //apply blur to all other elements
    const content = document.querySelectorAll('body *:not(#focus-box)');
    content.forEach(el => el.classList.add('blur-background', 'content-exclude-focus'));
  };
  // when Profile is deactivated:
  const deactivateADHDFriendly = () => {
    // gide the focus box
    const focusBox = document.getElementById('focus-box');
    focusBox.style.display = 'none';
    // remove blur from all elements
    const content = document.querySelectorAll('body *:not(#focus-box)');
    content.forEach(el => el.classList.remove('blur-background', 'content-exclude-focus'));
  };


  //more accessibility functionality added- (vision impaired file and seizure file)
  const [visionImpaired, setVisionImpaired] = useState(false);
  const [seizureSafe, setSeizureSafe] = useState(false);

  //Seiizure safe function
  const toggleSeizureSafe = () => {
    setSeizureSafe((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add('seizure-safe');
      } else {
        document.body.classList.remove('seizure-safe');
      }
      return newState;
    });
  };
  useEffect(() => {
    const className = 'seizure-safe';
    if (seizureSafe) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
    return () => document.body.classList.remove(className);
  }, [seizureSafe]);


  //Vision Impaired function
  const toggleVisionImpaired = () => {
    setVisionImpaired((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add('vision-impaired');
      } else {
        document.body.classList.remove('vision-impaired');
        // Revert visuals back to normal here
      }
      return newState;
    });
  };
  useEffect(() => {
  // Add or remove class on body based on visionImpaired state
  const className = 'vision-impaired';
  if (visionImpaired) {
    document.body.classList.add(className);
  } else {
    document.body.classList.remove(className);
  }
  // Cleanup function to remove the class when the component unmounts or the state changes
  return () => document.body.classList.remove(className);
}, [visionImpaired]);


  //Align Right Functionality
  const [textAlignment, setTextAlignment] = useState('left');
  const alignTextRight = () => {
    setTextAlignment(prevAlignment => prevAlignment === 'left' ? 'right' : 'left');
  };
  useEffect(() => {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6'); // Target text elements
    textElements.forEach(element => {
      element.style.textAlign = textAlignment;
    });
  }, [textAlignment]);


  //line height control fucntions
  const [lineHeight, setLineHeight] = useState(1); // 1 is the default line height (which is 100%)
  const increaseLineHeight = () => {
    setLineHeight((prevLineHeight) => prevLineHeight + 0.1);
  };
  
  const decreaseLineHeight = () => {
    setLineHeight((prevLineHeight) => prevLineHeight - 0.1);
  };
  useEffect(() => {
    document.body.style.lineHeight = `${lineHeight}`;
  }, [lineHeight]);  

  //left text alignment function
  const [textAlign, setTextAlign] = useState('center'); // Default text alignment
  const toggleTextAlignment = () => {
    setTextAlign(textAlign === 'left' ? 'center' : 'left');
  };
  useEffect(() => {
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
    textElements.forEach(element => {
      element.style.textAlign = textAlign;
    });
  }, [textAlign]);

  //functions for fontsize
  const [fontSizePercentage, setFontSizePercentage] = useState(100);
  const increaseFontSize = () => {
    setFontSizePercentage((prevFontSizePercentage) => prevFontSizePercentage + 10);
  };
  const decreaseFontSize = () => {
    setFontSizePercentage((prevFontSizePercentage) => prevFontSizePercentage - 10);
  };
  useEffect(() => {
    document.body.style.fontSize = `${fontSizePercentage}%`;
  }, [fontSizePercentage]);


  //function for resetting all settings to default
  const resetSettings = () => {
    //reset to normal cursor
    setBigCursor(false);
    //reset titlehighlighht
    setHighlightTitles(false);
    // reset monochrome
    setIsMonochrome(false);
    //This will reset ADHD profile
    setAdhdfriendly(false);
    //remove the blur effect and hide box if needed
    document.body.classList.remove('blur-effect');
    //the focus bar, it will hide it
    const focusBox = document.querySelector('.focus-box');
    if (focusBox) {
      focusBox.style.display = 'none';
    }
    //Reset Title COlour
    setTitleColor('#000000');
    // Reset background color to white
    setBackgroundColor('#FFFFFF');
    // Reset text is magnified
    setIsTextMagnified(false);
    // Reset low saturation mode is enabled
    setIsLowSaturation(false);
    // Reset text color
    setTextColor('#000000');
    // Reset theme to 'light'
    setTheme('light');
    
    // Reset font size to 100%
    setFontSizePercentage(100);
    // Reset line height to normal
    setLineHeight(1);
    // Reset text alignment to left
    setTextAlign('center');
    setTextAlignment('center');
  
  // Apply resets immediately to elements
  const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, title');
  textElements.forEach(element => {
    element.style.color = '#000000';
    element.style.textAlign = 'center';
  });

  //This is for global styles
  document.body.style.color = '#FFFFFF';
  document.body.style.backgroundColor = '#FFFFFF';
  document.body.classList.remove('text-magnified', 'magnify', 'low-saturation', 'dark-theme');
  document.body.style.backgroundColor = '#FFFFFF';
  document.body.style.fontSize = '100%';
  document.body.style.lineHeight = 'normal';

  // If narration is ongoing, stop it
  if (synth && synth.speaking) {
    synth.cancel();
  }

  // Reset input text for speech
  setInputText('');
}

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

  /*  This will zookm to 1.2 levelnot needed now */
  // const toggleTextMagnification = () => {
  //   setIsTextMagnified(!isTextMagnified);
  // };
  // useEffect(() => {
  //   if (isTextMagnified) {
  //     document.body.classList.add('magnify-text');
  //   } else {
  //     document.body.classList.remove('magnify-text');
  //   }
  // }, [isTextMagnified]);


  //This is code for the narrator
  const getAllText = () => {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    let text = '';
    let node;
    while ((node = walker.nextNode())) text += node.nodeValue;
    return text;
  };

  const [synth] = useState(window.speechSynthesis);
  const [utterance] = useState(new SpeechSynthesisUtterance());
  // const getAllText = () => {
  // const bodyText = document.body.innerText; // or document.querySelector('.your-container').innerText;
  //   return bodyText;
  // };
  const startNarration = () => {
    // utterance.text = getAllText();
    // synth.speak(utterance);
    synth.cancel(); // Make sure to cancel any ongoing speech first
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
      <div className="profile-toggle-container">
        <div className="profile-toggle seizure-safe-toggle">
        <span className="profile-description">Seizure Safe Profile</span>
          <label className="switch">
            <input type="checkbox" checked={seizureSafe} onChange={toggleSeizureSafe} />
        <span className="slider round"></span>
          </label>
        </div>
          <div className="profile-toggle vision-impaired-toggle">
          <span className="profile-description">Vision Impaired Profile</span>
          <label className="switch">
            <input type="checkbox" checked={visionImpaired} onChange={toggleVisionImpaired} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="profile-toggle">
          <span className="profile-description">ADHD Friendly Profile</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={adhdFriendly}
              onChange={toggleAdhdFriendly}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
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
        <div className="text-alignment-controls">
          <button onClick={toggleTextAlignment}>
            Align Left
          </button>
        </div>
        <div className="font-size-adjustment-controls">
          <div className="font-size-adjustment-title">Adjust Font Sizing</div>
          <button onClick={decreaseFontSize}>-</button>
          <span>{fontSizePercentage}%</span>
          <button onClick={increaseFontSize}>+</button>
        </div>
        <div className='text-right'>
          <button onClick={alignTextRight}>
            Align Right
          </button>
        </div>
        <div className="line-height-controls">
          <div className="line-height-controls-title">Adjust Line Height</div>
          <button onClick={decreaseLineHeight}>-</button>
          <span>{(lineHeight * 100).toFixed(0)}%</span> {/* This will convert the lineHeight to a percentage display */}
          <button onClick={increaseLineHeight}>+</button>
        </div>
        <div className="monochrome-container">
          <button onClick={toggleMonochrome} className={`monochrome-button ${isMonochrome ? 'active' : ''}`}>
            Monochrome
          </button>
        </div>
        <div className="highlight-Titles-container">
          <button onClick={toggleHighlightTitles} className={`toggle-button ${highlightTitles ? 'on' : 'off'}`}>
            {highlightTitles ? 'Unhighlight Titles' : 'Highlight Titles'}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AccessibilityModal;