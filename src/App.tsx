import React, { useState } from "react";
import "./App.css";
import Refleks from "./components/Games/Refleks/Refleks";
import ColorsGame from "./components/Games/ColorsGame/ColorsGame";
import Main from "./components/Main/Main";

const App: React.FC = () => {
  const [aktualnaStrona, setAktualnaStrona] = useState("colorsGame");

  const getKontroler = () => {
    switch (aktualnaStrona) {
      case "refleks":
        return <Refleks />;
      case "colorsGame":
        return <ColorsGame />;
      default:
        return <Main />;
    }
  };

  const handleMenuClick = (a: string) => {
    setAktualnaStrona(a);
  };

  return (
    <div className="App">
      <div id="menu">
        <div
          onClick={() => {
            handleMenuClick("");
          }}
        >
          Main
        </div>
        <div
          onClick={() => {
            handleMenuClick("refleks");
          }}
        >
          +Refleks
        </div>
        <div
          onClick={() => {
            handleMenuClick("colorsGame");
          }}
        >
          Color Game
        </div>
        <div>
          <a href="http://www.brainmetrix.com/brain-fitness/">Brain fitness</a>
        </div>
        <div>
          <a href="http://www.brainmetrix.com/cognitive-training/">
            Cognitive Training
          </a>
        </div>

        <div>
          <a href="http://www.brainmetrix.com/concentration-game/">
            Concentration Game
          </a>
        </div>
        <div>
          <a href="http://www.brainmetrix.com/memory-game/">Memory Game</a>
        </div>
        <div>
          <a href="http://www.brainmetrix.com/memory-test/">Memory Test</a>
        </div>
        <div>
          <a href="http://www.brainmetrix.com/tower-of-hanoi/">
            Tower of Hanoi
          </a>
        </div>
        <div>Reversi</div>
      </div>
      <div id="container">{getKontroler()}</div>
    </div>
  );
};

export default App;
