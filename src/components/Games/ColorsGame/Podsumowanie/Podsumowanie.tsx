import React from "react";

import { StatusGry } from "../ColorsGame";

import "./Podsumowanie.css";

interface IPodsumowanieParam {
  setStatus: React.Dispatch<React.SetStateAction<StatusGry>>;
  wynik: {
    wynik: number;
    setWynik: React.Dispatch<React.SetStateAction<number>>;
  };
}

const Podsumowanie: React.FC<IPodsumowanieParam> = ({
  setStatus,
  wynik: { wynik, setWynik },
}) => {
  const handlePodsumowanieClick = () => {
    setWynik(0);
    setStatus(StatusGry.Main);
  };

  return (
    <div className="podsumowanie" onClick={handlePodsumowanieClick}>
      Wynik: {wynik}
    </div>
  );
};

export default Podsumowanie;
