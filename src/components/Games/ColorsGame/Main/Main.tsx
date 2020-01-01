import React from "react";

import { StatusGry } from "../ColorsGame";

import "./Main.css";

interface IMainProps {
  setStatus: React.Dispatch<React.SetStateAction<StatusGry>>;
}

const Main: React.FC<IMainProps> = ({ setStatus }) => {
  const handleClick = () => {
    setStatus(StatusGry.Gra);
  };

  return (
    <div className="main" onClick={handleClick}>
      START
    </div>
  );
};

export default Main;
