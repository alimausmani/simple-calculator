import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');
  const [previous, setPrevious] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (value) => {
    if (input === '0') {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleOperatorClick = (value) => {
    setPrevious(input);
    setInput('');
    setOperator(value);
  };

  const handleClear = () => {
    setInput('0');
    setPrevious('');
    setOperator('');
  };

  const calculate = () => {
    let result;
    const prev = parseFloat(previous);
    const current = parseFloat(input);

    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    setInput(result.toString());
    setPrevious('');
    setOperator('');
  };

  const handlePercent = () => {
    setInput((parseFloat(input) / 100).toString());
  };

  const handleParentheses = (value) => {
    setInput(input + value);
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={handleClear}>AC</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={handlePercent}>%</button>
        <button onClick={() => handleParentheses('(')}>(</button>
        <button onClick={() => handleParentheses(')')}>)</button>
      </div>
    </div>
  );
};

export default App;
