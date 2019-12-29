import React, { useState } from "react";
import Board from "./Board/Board";
import "./Refleks.css";

const Refleks = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="refleks">
      {/* <div className="info">{info}</div> */}
      <div className="score">Wynik: {score} sek.</div>
      <Board />
    </div>
  );
};

export default Refleks;
