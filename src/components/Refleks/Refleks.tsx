import React, { useState } from "react";
import "./Refleks.css";

const Refleks = () => {
  const [score, setScore] = useState(0);
  const [info, setInfo] = useState("Naciśnij aby rozpocząć grę.");
  const [time, setTime] = useState();
  const [state, setState] = useState(0);
  const [color, setColor] = useState("white");
  // const [timer, setTimer] = useState(null);
  let timer: NodeJS.Timeout | null = null;

  return (
    <div
      className={`refleks ${color}`}
      onClick={() => {
        if (state === 0) {
          setState(2);
          setColor("white");
          setScore(0);
          setInfo("");
          const offsetTime = Math.random() * 2000 + 1000;

          timer = setTimeout(() => {
            setColor("red");
            setState(1);
            setTime(new Date().getTime());
          }, offsetTime);
          console.log(1, timer);
        } else if (state === 1) {
          const actualTime = new Date().getTime();
          const result = actualTime - time;
          setScore(result);
          setInfo("Naciśnij aby zagrać ponownie.");
          setState(0);
        } else if (state === 2) {
          console.log("qwe", timer);
          if (timer) {
            clearTimeout(timer);
          }
        }
      }}
    >
      <div>{info}</div>
      <div>{score ? `Wynik: ${(score / 1000).toPrecision(4)} sek.` : ""}</div>
    </div>
  );
};

export default Refleks;
