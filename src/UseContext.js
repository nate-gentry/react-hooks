import React, { useState } from 'react'
import ClassContextComponent from './helpingFiles/ClassContextComponent'
import FunctionalContextComponent from '../src/helpingFiles/FunctionalContextComponent'
import { ThemeProvider } from './helpingFiles/ThemeContext'

export const ThemeContext = React.createContext()
export default function UseContext() {
  const [darkTheme,setDarkTheme] = useState(true)


  function toggleTheme(){
    setDarkTheme(prevDarkThem =>!prevDarkThem)
  }

  return (
    <div>
      <ThemeProvider>
        <button onClick={toggleTheme}>Toggle theme</button>
        <FunctionalContextComponent/>
        <ClassContextComponent/>
      </ThemeProvider>
    

    </div>
  )
}
