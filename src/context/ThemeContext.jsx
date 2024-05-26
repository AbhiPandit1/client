import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [style, setStyle] = useState('left-1');
  const [textColor, setTextColor] = useState('black');
  const [bgColor, setbgColor] = useState('white');

  const handleTheme = () => {
    setStyle((prevStyle) => (prevStyle === 'right-1' ? 'left-1' : 'right-1'));
    setTextColor((prevStyle) => (prevStyle === 'black' ? 'white' : 'black'));
    setbgColor((prevStyle) => (prevStyle === 'white' ? 'black' : 'white'));
  };

  return (
    <ThemeContext.Provider value={{ style, handleTheme, textColor, bgColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
