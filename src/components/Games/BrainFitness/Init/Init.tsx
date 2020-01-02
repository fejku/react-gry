import React, { useState, useRef, useEffect } from "react";

interface IPozycja {
  x: number;
  y: number;
}

const Init = () => {
  const [wielkosc, setWielkosc] = useState(10);
  const [predkosc, setPredkosc] = useState(1);
  const [divSize, setDivSize] = useState(0);
  const [pozycja, setPozycja] = useState<IPozycja | null>(null);

  const qwe = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDivSize(dajRozmiar());
  }, []);

  const dajRozmiar = () => {
    if (qwe && qwe.current) {
      return qwe.current.clientHeight < qwe.current.clientWidth
        ? qwe.current.clientHeight
        : qwe.current.clientWidth;
    }
    return 0;
  };

  const wylosujPozycje = () => {
    const x = Math.random() * wielkosc;
    const y = Math.random() * wielkosc;

    return { x, y };
  };

  setInterval(() => {}, predkosc * 1000);

  return (
    <div className="init" style={{ height: "100%" }}>
      {/* Wielkosc <input type="text" value={wielkosc} />
      Prędkość <input type="text" value={predkosc.toFixed(4)} />
      <button>Start</button> */}
      <div
        ref={qwe}
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: `repeat(${wielkosc}, ${divSize / wielkosc}px)`,
          gridTemplateRows: `repeat(${wielkosc}, ${divSize / wielkosc}px)`,
        }}
      >
        {Array(wielkosc * wielkosc)
          .fill(0)
          .map((a, i) => {
            return <div>{i}</div>;
          })}
      </div>
    </div>
  );
};

export default Init;
