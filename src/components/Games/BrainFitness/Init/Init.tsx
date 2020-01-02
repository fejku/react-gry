import React, { useState, useRef, useEffect } from 'react'

const Init = () => {
  const [wielkosc, setWielkosc] = useState(3);
  const [predkosc, setPredkosc] = useState(1);

  return (
    <div className="init" style={{height: "100%"}} >
      Wielkosc <input type="text" value={wielkosc} />
      Prędkość <input type="text" value={predkosc.toFixed(4)} />
      <button>Start</button>
      <div style={{height: "100%", display: "grid", gridTemplateColumns: `repeat(${wielkosc}, 10vmin)`, gridTemplateRows: `repeat(${wielkosc}, 10vmin)`}}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  )
}

export default Init
