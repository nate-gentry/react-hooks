import React, { useState, useMemo, useEffect } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

//we using useMemo to not rerender and if number is the same not gonna call slow function
//we use only when its slow 
// when we need to compare obj and arr 
  const doubleNumber = useMemo(() => {
   return  slowFunction(number);

  }, [number]);
  
  const themeStyles = useMemo(()=>{
     return  {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  },[dark]) 
    
    useEffect(()=>{
        console.log("style change ")
    },[themeStyles])
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
