import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([])


  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  },[resourceType])
  //if we pass [] it will be like mount only when we refresh page will run 

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>User</button>
        <button onClick={() => setResourceType("comments")}>Comment</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item =>{
          return<pre>{JSON.stringify(item)}</pre>

      })}
    </>
  );
}
