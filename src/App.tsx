import React, { useState } from "react";
import "./App.css";
import Refleks from "./components/Refleks/Refleks";
import Main from "./components/Main/Main";

const App: React.FC = () => {
  const [aktualnaStrona, setAktualnaStrona] = useState("refleks");

  const getKontroler = () => {
    switch (aktualnaStrona) {
      case "refleks":
        return <Refleks />;
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
          Refleks
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
          <a href="https://www.google.com/search?q=color+game+brain+teaser&sxsrf=ACYBGNTKISEpUS94VXWETFJfoVj3_3PEVQ:1577644943374&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjdvbmzwdvmAhWwlYsKHbuxCjsQ_AUoAXoECAsQAw&biw=1920&bih=937#imgrc=BzMOks_bRruBwM:">
            Color Game
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
