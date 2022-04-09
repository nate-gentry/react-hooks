import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const prevName = useRef('')
// store value but not rerender // ref elements for HTML 
  useEffect(() => {
    prevName.current = name
  });

  //always do with state or props and not just .value 

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name} and it use to be {prevName.current}</div>
     
    </div>
  );
}
