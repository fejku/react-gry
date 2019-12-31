import React, { useState } from 'react'
import "./ColorsGame.css";

interface Color {
  name: string;
  color: string;
}

const ColorsGame = () => {

  const colors: Color[] = [
    {name: "Czerwony", color: "red"}, 
    {name: "Zielony", color: "green"}, 
    {name: "Niebieski", color: "blue"}, 
    {name: "Fioletowy", color: "violet"}
  ];

  const [time, setTime] = useState(2000);
  const [percent, setPercent] = useState(0);

  const interval = 2000;

  // if (percent < 100)
  //   setTimeout(() => {
  //     setPercent(percent + 10)
  //     // if (percent < 100)
  //     //   setPercent(percent + 1)
  //   }, interval/10);

  const qwe = () => {
    const textColorIndex = Math.floor(Math.random() * colors.length);
    const czyTakiSam = Math.random() >= 0.5
    if (!czyTakiSam) {
      let colorIndex;
      while (colorIndex === textColorIndex) {
        colorIndex = Math.floor(Math.random() * colors.length);
      }
    }
  }

  return (
    <div className="qwe">
      <div className="progressbar"></div>
      <div className="tlo">
        <div className="napis"></div>
      </div>
    </div>
  )
}

export default ColorsGame
