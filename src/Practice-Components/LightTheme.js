import React from 'react'
import useLocalStorage from 'use-local-storage';
import './lightTheme.css';

const LightTheme = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
  return (
    <div className='theme-Toggle' data-theme={theme} >
        {/* <button>Light Theme</button> */}
        <i onClick={switchTheme} className='fas fa-toggle-on'>Light Theme</i>
    </div>
  )
}

export default LightTheme
