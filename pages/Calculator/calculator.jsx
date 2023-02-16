import React from 'react';
import { useState } from 'react';
import operators from './operators';

export default function calculator () {
    const [num, setNum] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(undefined)

    const handleInput1 = (e) => {
      const updatedNum = e.target.value;

      setNum(updatedNum);
    }
    const handleInput2 = (e) => {
      const updatedNum2 = e.target.value;

      setNum2(updatedNum2);
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
            <button name = 'sum'onClick={()=>setResult(operators.add(num, num2))}>+</button>
            <button name = 'sub'onClick={()=>setResult(operators.sub(num, num2))}>-</button>
            <button name = 'mul'onClick={()=>setResult(operators.mul(num, num2))}>*</button>
            <button name = 'div'onClick={()=>setResult(operators.div(num, num2))}>/</button>

        </div>
        <div>
          <span>Result is: </span>
          {result !== undefined && <span>{result}</span>}
        </div>
      </>
    );
  }
