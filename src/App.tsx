import React, { useState } from "react";
import "./App.css";
import Refleks from "./components/Games/Refleks/Refleks";
import ColorsGame from "./components/Games/ColorsGame/ColorsGame";
import Home from "./components/Home/Home";
import BrainFitness from "./components/Games/BrainFitness/BrainFitness";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App: React.FC = () => {
  const strony = [
    {sciezka: "/", tekst: "Home", komponent: <Home />},
    {sciezka: "/refleks", tekst: "+Refleks", komponent: <Refleks />},
    {sciezka: "/color_game", tekst: "+Colors Game", komponent: <ColorsGame />},
    {sciezka: "/brain_fitness", tekst: "Brain fitness", komponent: <BrainFitness />},
  ];

  return (
    <Router>
      <div className="App">
        <div className="menu">
          {strony.map(strona => <Link to={strona.sciezka}>{strona.tekst}</Link>)}
        </div>

        <div className="container">
          <Switch>
            {strony.reverse().map(strona => <Route path={strona.sciezka}>{strona.komponent}</Route>)}
          </Switch>
        </div>
      </div>    
    </Router>



    //     <div>
    //       <a href="http://www.brainmetrix.com/brain-fitness/">Brain fitness</a>
    //     </div>
    //     <div>
    //       <a href="http://www.brainmetrix.com/cognitive-training/">
    //         Cognitive Training
    //       </a>
    //     </div>

    //     <div>
    //       <a href="http://www.brainmetrix.com/concentration-game/">
    //         Concentration Game
    //       </a>
    //     </div>
    //     <div>
    //       <a href="http://www.brainmetrix.com/memory-game/">Memory Game</a>
    //     </div>
    //     <div>
    //       <a href="http://www.brainmetrix.com/memory-test/">Memory Test</a>
    //     </div>
    //     <div>
    //       <a href="http://www.brainmetrix.com/tower-of-hanoi/">
    //         Tower of Hanoi
    //       </a>
    //     </div>
    //     <div>Reversi</div>
    //   </div>
    //   <div id="container">{getKontroler()}</div>
    // </div>
  );
};

export default App;
