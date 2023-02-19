import React from 'react'
import { Card, Space, Grid} from 'antd';
import { useEffect, useState } from 'react'
import TableView from '@/components/TableView';

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
      <Space direction="horizontal" size={16}>
      {quote && quote.entries.map((item)=>{
      return(
        <div>

            <Card
                title={item.Description}
                extra={<a href="#">More</a>}
                style={{
                    width: 300,
                }}
                >
                <p>{item.API}</p>
                <p>{item.Description}</p>
                <p>Card content</p>
                </Card>  
        </div>
            
      )
    })}
    </Space>
  </div>
)
}
