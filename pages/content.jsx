import { useEffect, useState } from 'react'
import { Card, List, Grid, Segmented } from 'antd';
import ListView from '@/components/ListView';
import TableView from '@/components/TableView';

const ListAndGrid = () => {
  const [view, setView] = useState("List");

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
    <>
       <Segmented
    options={[
      {
        label: 'List',
        value: 'List',
      },
      {
        label: 'Table',
        value: 'Table',
      },
    ]}
    onChange ={(e)=>setView(e)}

  />
  {quote && view == 'List'?(
    <TableView entries={quote.entries}/>
  ):(
    <ListView entries = {quote.entries}/>
  )
  }
    </>
  );
};

export default ListAndGrid;