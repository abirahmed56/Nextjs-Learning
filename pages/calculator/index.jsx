import React from 'react';
import { useState } from 'react';
import styles from '@/styles/calculator.module.css'



export default function Calculator () {
    const [num, setNum] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(undefined)


    function add(e){
      e.preventDefault();
      setResult(Number(num) + Number(num2));
    }
    function sub(e){
      e.preventDefault();
      setResult(Number(num) - Number(num2));
    }
    function mul(e){
      e.preventDefault();
      setResult(Number(num) * Number(num2));
    }
    function div(e){
      e.preventDefault();
      setResult(Number(num) / Number(num2));
    }

    const handleInput1 = (e) => {
      const updatedNum = e.target.value;

      setNum(updatedNum);
    }
    const handleInput2 = (e) => {
      const updatedNum2 = e.target.value;

      setNum2(updatedNum2);
    }

    return (
      < div className={styles.cal}>
          <div className={styles.inputs}>
            <p>Enter two no:</p>
            <input className={styles.inputNo} type="number"
              onChange={handleInput1}
              value={num}/>
            <input className={styles.inputNo} type="number"
              onChange={handleInput2}
              value={num2}/>
          </div>
          <div className={styles.keypad}>
              <button className={styles.button} onClick={add}>+</button>
              <button className={styles.button} onClick={sub}>-</button>
              <button className={styles.button} onClick={mul}>*</button>
              <button className={styles.button} onClick={div}>/</button>

          </div>
          <div>
            <span>Result is: </span>
            {result !== undefined && <span>{result}</span>}
          </div>
      </div>
    );
  }
