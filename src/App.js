// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState(''); // State to hold the display value

  const handleClick = (value) => {
    setDisplay(prevDisplay => prevDisplay + value);
  }

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  }

  const clearDisplay = () => {
    setDisplay('');
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => clearDisplay()}>C</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('/')}>/</button>
          
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('0')}>0</button>

          <button onClick={() => handleClick('+')}>+</button>
          
          <button onClick={() => handleClick('*')}>*</button>
          
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => calculateResult()}>=</button>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
