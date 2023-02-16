import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function calculator () {
    const [num, setNum] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(undefined);

    const handleInput1 = (e) => {
      const updatedNum = e.target.value;

      setNum(updatedNum);
    }
    const handleInput2 = (e) => {
      const updatedNum2 = e.target.value;

      setNum2(updatedNum2);
    }

    const handleOperation = (e) => {
      if(e.name=='sum'){
        
        setResult((e.target.num) + (e.target.num2));
      }
      else if(e.name=='sub'){
        setResult((e.target.num) - (e.target.num2))
      }else if(e.name=='mul'){
        setResult((e.target.num) * (e.target.num2))
      }else if(e.name=='div'){
        setResult((e.target.num) / (e.target.num2))
      }

    }
  

    return (
      < >
        <div>
          <input type="number"
            onChange={handleInput1}
            value={num}/>
          <input type="number"
            onChange={handleInput2}
            value={num2}/>
        </div>
        <div>
            <button name = 'sum'onClick={handleOperation}>+</button>
            <button name = 'sub'onClick={handleOperation}>-</button>
            <button name = 'mul'onClick={handleOperation}>*</button>
            <button name = 'div'onClick={handleOperation}>/</button>

        </div>
        <div>
          <span>Result is: </span>
          {result !== undefined && <span>{result}</span>}
        </div>
      </>
    );
  }
