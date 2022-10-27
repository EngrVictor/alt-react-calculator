import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.', '%'];

  function updateCalc(value) {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    )
      return;
    setCalc(calc + value);
  }

  function calculate() {
    if ((ops && calc === '') || ops.includes(calc.slice(-1))) return;
    setResult(calc);
    setCalc(eval(calc).toString());

    setTimeout(() => {
      setResult(eval(calc).toString());
      setCalc('');
    }, 2000);
  }

  function deleteLast() {
    if (calc === '') return;

    const value = calc.slice(0, -1);
    setCalc(value);
  }

  return (
    <div className="container">
      <h3 className="out">{result ? result : ''}</h3>
      <div className="head">
        <h1>{calc || '0'}</h1>
      </div>
      <div className="tail">
        <div>
          <button
            onClick={() => {
              setCalc('');
              setResult('');
            }}
          >
            C
          </button>
          <button
            onClick={() => {
              updateCalc('/');
            }}
          >
            ÷
          </button>
          <button
            onClick={() => {
              updateCalc('*');
            }}
          >
            x
          </button>
          <button onClick={deleteLast} style={{ color: '#ffc290' }}>
            &#x232b;
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              updateCalc('7');
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              updateCalc('8');
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              updateCalc('9');
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              updateCalc('-');
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              updateCalc('4');
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              updateCalc('5');
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              updateCalc('6');
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              updateCalc('+');
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              updateCalc('1');
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              updateCalc('2');
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              updateCalc('3');
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              updateCalc('%');
            }}
          >
            %
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              updateCalc('.');
            }}
          >
            .
          </button>
          <button
            onClick={() => {
              updateCalc('0');
            }}
          >
            0
          </button>
          <button onClick={calculate} className="equal-btn">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
