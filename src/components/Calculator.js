import React, { useState } from 'react';
import calculate from '../logic/calculate';

export const Calculator = ()=>{
    const [currentState, setState] = useState(0);

  // Event Listener
  const eventHandler = (e) => {
    const value = e.target.textContent;
    setState((currentState) => calculate(currentState, value));
  };

  const { next, total, operation } = currentState;
  const result = `${
    total || operation || next
      ? `${total || ''} ${operation || ''} ${next || ''}`
      : 0
  }`;

    return <div className="container">
    <div className="output">
      <span>{result}</span>
    </div>
    <button type="submit" onClick={eventHandler}>AC</button>
    <button type="submit" onClick={eventHandler}>+/-</button>
    <button type="submit" onClick={eventHandler}>%</button>
    <button type="submit" onClick={eventHandler} className="operand">
      ÷
    </button>
    <button type="submit" onClick={eventHandler}>7</button>
    <button type="submit" onClick={eventHandler}>8</button>
    <button type="submit" onClick={eventHandler}>9</button>
    <button type="submit" onClick={eventHandler} className="operand">
      x
    </button>
    <button type="submit" onClick={eventHandler}>4</button>
    <button type="submit" onClick={eventHandler}>5</button>
    <button type="submit" onClick={eventHandler}>6</button>
    <button type="submit" onClick={eventHandler} className="operand">
      -
    </button>
    <button type="submit" onClick={eventHandler}>1</button>
    <button type="submit" onClick={eventHandler}>2</button>
    <button type="submit" onClick={eventHandler}>3</button>
    <button type="submit" onClick={eventHandler} className="operand">
      +
    </button>
    <button type="submit" onClick={eventHandler} className="span__two">
      0
    </button>
    <button type="submit" onClick={eventHandler}>.</button>
    <button type="submit" onClick={eventHandler} className="operand">
      =
    </button>
  </div>
  }
  