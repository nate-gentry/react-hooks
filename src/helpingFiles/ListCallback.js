import React, { useEffect, useState } from 'react'

export default function ListCallback({getItems}) {
    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(getItems(5))
        console.log("Updating Items")
    },[getItems])
  return items.map(item => <div  key={item}>{item}</div>)
}
