import React, { useState } from "react";
import "./ColorsGame.css";

import Main from "./Main/Main";
import Gra from "./Gra/Gra";
import Podsumowanie from "./Podsumowanie/Podsumowanie";

export enum StatusGry {
  Main,
  Gra,
  Podsumowanie,
}

const ColorsGame = () => {
  const [status, setStatus] = useState(StatusGry.Main);
  const [wynik, setWynik] = useState(0);

  const render = (status: StatusGry) => {
    switch (status) {
      case StatusGry.Main:
        return <Main setStatus={setStatus} />;
      case StatusGry.Gra:
        return <Gra setStatus={setStatus} wynik={{ wynik, setWynik }} />;
      case StatusGry.Podsumowanie:
        return (
          <Podsumowanie setStatus={setStatus} wynik={{ wynik, setWynik }} />
        );
    }
  };

  return <div className="colors_game">{render(status)}</div>;
};

export default ColorsGame;
