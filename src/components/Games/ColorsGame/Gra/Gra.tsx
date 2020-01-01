import React, { useEffect, useState } from "react";

import { StatusGry } from "../ColorsGame";

import "./Gra.css";

interface Color {
  name: string;
  color: string;
}

interface IGraProps {
  setStatus: React.Dispatch<React.SetStateAction<StatusGry>>;
  wynik: {
    wynik: number;
    setWynik: React.Dispatch<React.SetStateAction<number>>;
  };
}

const Gra: React.FC<IGraProps> = ({
  setStatus,
  wynik: { wynik, setWynik },
}) => {
  const colors: Color[] = [
    { name: "Czerwony", color: "red" },
    { name: "Zielony", color: "green" },
    { name: "Niebieski", color: "blue" },
    { name: "Fioletowy", color: "violet" },
  ];

  const [textColorIndex, setTextColorIndex] = useState(0);
  const [fontColorIndex, setFontColorIndex] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [counter, setCounter] = useState(0);

  const ustawOdliczanie = () => {
    const interval = setInterval(() => {
      setCounter(counter => {
        if (counter === 9) {
          clearInterval(interval);
          setStatus(StatusGry.Podsumowanie);
        }
        return counter + 1;
      });
    }, 200);

    setTimer(interval);
  };

  useEffect(() => {
    ustawOdliczanie();
    // return () => {
    //   cleanup;
    // };
  }, []);

  const wylosujIndexKoloru = (kolory: Color[]): number => {
    return Math.floor(Math.random() * kolory.length);
  };

  const noweKolory = (): void => {
    const wylosowanyIndexTekstu = wylosujIndexKoloru(colors);
    setTextColorIndex(wylosowanyIndexTekstu);

    const czyWylosowacKolorCzcionki = Math.random() >= 0.5;
    if (czyWylosowacKolorCzcionki) {
      let wylosowanyIndexCzcionki;
      do {
        wylosowanyIndexCzcionki = wylosujIndexKoloru(colors);
        setFontColorIndex(wylosowanyIndexCzcionki);
      } while (wylosowanyIndexTekstu === wylosowanyIndexCzcionki);
    } else {
      setFontColorIndex(wylosowanyIndexTekstu);
    }
  };

  const handleTakNie = (value: boolean): void => {
    const czyTakieSameKolory = textColorIndex === fontColorIndex;
    if (value === czyTakieSameKolory) {
      if (timer) {
        clearInterval(timer);
      }
      setCounter(0);
      noweKolory();
      setWynik(wynik => wynik + 1);
      ustawOdliczanie();
    } else {
      // Przegrana
      setStatus(StatusGry.Podsumowanie);
    }
  };

  return (
    <div className="gra">
      <div className="wynik">Wynik: {wynik}</div>
      <div className="progressbar">
        <div
          className="progressbar_aktywny"
          style={{ flex: counter * 10 }}
        ></div>
        <div
          className="progressbar_nieaktywny"
          style={{ flex: 100 - counter * 10 }}
        ></div>
      </div>
      <div className="napis" style={{ color: colors[fontColorIndex].color }}>
        {colors[textColorIndex].name}
      </div>

      <div className="przyciski">
        <div
          className="button button_lewy"
          onClick={() => {
            handleTakNie(true);
          }}
        >
          Tak
        </div>
        <div
          className="button button_prawy"
          onClick={() => {
            handleTakNie(false);
          }}
        >
          Nie
        </div>
      </div>
    </div>
  );
};

export default Gra;
