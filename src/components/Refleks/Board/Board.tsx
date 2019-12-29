import React, { useState } from "react";
import "./Board.css";

const Board = () => {
  const [info, setInfo] = useState("Naciśnij aby rozpocząć grę.");

  return (
    <div className="board" onClick={() => {}}>
      {info}
    </div>
  );
};

export default Board;
