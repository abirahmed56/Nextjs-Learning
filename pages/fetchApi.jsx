import React from 'react'
import { useEffect, useState } from 'react'

export default function () {
    const[quote, setQuote] = useState("");

    useEffect(()=>{
        const fetchQuote = async () => {
            const res =await fetch('https://api.publicapis.org/entries');
            const data = await res.json();

            setQuote(data);
        };

        fetchQuote();
    }, []);
    console.log(quote);
  return (
    <div className='handle_default'>
      <h1 className='handle_header'>DATA WITH NORMAL FETCH</h1>
      <h3 className='handle_header'> No of Content: {quote.count}</h3>
      <br/>
      <br />
    {quote && quote.entries.map((item)=>{
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
