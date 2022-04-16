import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionalContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate()
  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#333" : "#CCC",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div style={themeStyle}>FunctionalContextComponent</div>

    </div>
  );
}
