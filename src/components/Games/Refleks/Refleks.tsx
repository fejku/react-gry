import React, { useState } from "react";
import "./Refleks.css";

const Refleks = () => {

  enum Status {
    INIT = 0,
    READY_TO_CLICK = 1,
    WAITING = 2,
    RESULT = 3,
  }

  const [score, setScore] = useState(0);
  const [time, setTime] = useState();
  const [state, setState] = useState(Status.INIT);
  const [color, setColor] = useState("white");
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  
  const dajLosowyKolor = (): string => { 
    return "hsl(" + 360 * Math.random() + ',' +
               (70 + 25 * Math.random()) + '%,' + 
               (85 + 10 * Math.random()) + '%)'
  }

  const dajWynik = (score: number): string => {
    if (score === -1) {
      return "Bądź bardziej cierpliwy!!!";
    } 
    
    return `Twój wynik: ${(score / 1000).toPrecision(4)} sek.`;
  }

  const dajStatusWynik = (state: Status, score: number): string => {
    switch (state) {
      case Status.INIT: 
        return "START"; 
      case Status.WAITING:
        return "CZEKAJ";
      case Status.READY_TO_CLICK:
        return "NACIŚNIJ!!!";
      case Status.RESULT:
        return dajWynik(score);
    }
  }

  const dajTimeout = (offsetTime: number): NodeJS.Timeout => {
    return setTimeout(() => {
      setColor(dajLosowyKolor());
      setState(Status.READY_TO_CLICK);
      setTime(new Date().getTime());
    }, offsetTime)
  }

  const initializeAndSetTimeout = (): void => {
    setState(Status.WAITING);
    setScore(0);    

    const offsetTime = Math.random() * 2000 + 1000;
    setTimer(dajTimeout(offsetTime));
  }

  const clickedToEarly = (timer: NodeJS.Timeout | null): void => {
    if (timer) {
      setState(Status.RESULT);
      setScore(-1);
      clearTimeout(timer);
    }
  }

  const secondClick = (): void => {
    setState(Status.RESULT);
    const actualTime = new Date().getTime();
    const result = actualTime - time;
    setScore(result);    
  }

  const handleClickBoard = () => {
    switch(state) {
      case Status.INIT:
        initializeAndSetTimeout();
        break;
      case Status.WAITING:
        clickedToEarly(timer);
        break;
      case Status.READY_TO_CLICK:        
        secondClick();
        break;
      case Status.RESULT:        
        setColor("white");
        setState(Status.INIT);
        break;        
    }
  }

  return (
    <div
      className="refleks"
      style={{backgroundColor: color}}
      onClick={handleClickBoard}
    >
      {dajStatusWynik(state, score)}
    </div>
  );
};

export default Refleks;
