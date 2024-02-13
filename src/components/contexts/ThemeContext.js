import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  isDarkThemeEnabled: false,
  toggleDarkTheme: () => {},
});

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);

  // Check for a saved theme preference in localStorage when the component mounts
  useEffect(() => {
    const storedThemePreference = localStorage.getItem('darkTheme') === 'true';
    setIsDarkThemeEnabled(storedThemePreference);
  }, []);

  // Function to toggle the theme
  const toggleDarkTheme = () => {
    const newThemePreference = !isDarkThemeEnabled;
    setIsDarkThemeEnabled(newThemePreference);
    localStorage.setItem('darkTheme', newThemePreference);
  };

  // The value passed to the provider includes the theme state and the toggle function
  return (
    <ThemeContext.Provider value={{ isDarkThemeEnabled, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
