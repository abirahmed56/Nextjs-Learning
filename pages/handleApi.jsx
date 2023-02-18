import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function handleApi() {
    const [myData, setMyData] = useState("");

    useEffect(()=>{
        axios
            .get("https://api.publicapis.org/entries")
            .then((res) => {setMyData(res.data)
              console.log(res.data)
            }
            );
    }, []);
  return (
    <div className='handle_default'>
      <h1 className='handle_header'>DATA WITH AXIOS</h1>
      <h3 className='handle_header'> No of Content: {myData.count}</h3>

      {myData && myData.entries.map((item)=>{
        return(
          <div className='handle_entities'>
            <h3>API: {item.API}</h3>
            <h3>Description: {item.Description}</h3>
            <h3>Auth: {item.Auth}</h3>
            <h3>HTTPS: {item.HTTPS}</h3>
            <h3>Cors: {item.Cors}</h3>
            <h3>Link: {item.Link}</h3>
            <h3>Category: {item.Category}</h3>
            <br/>
            <br />
          </div>
          
        )
      })}
    </div>
  )
}
