import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [style, setStyle] = useState('left-1');
  const [textColor, setTextColor] = useState('text-white');
  const [bgColor, setbgColor] = useState('bg-black');

  const handleTheme = () => {
    setStyle((prevStyle) => (prevStyle === 'right-1' ? 'left-1' : 'right-1'));
    setTextColor((prevStyle) =>
      prevStyle === 'text-black' ? 'text-white' : 'text-black'
    );
    setbgColor((prevStyle) =>
      prevStyle === 'bg-white' ? 'bg-black' : 'bg-white'
    );
  };

  return (
    <ThemeContext.Provider value={{ style, handleTheme, textColor, bgColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
