import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme(){
    return useContext(ThemeContext)
}
export function useThemeUpdate(){
    return ThemeUpdateContext(ThemeUpdateContext)
}


export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkThem) => !prevDarkThem);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext value={toggleTheme}>
          {children}
          </ThemeUpdateContext>
    </ThemeContext.Provider>
  );
}
