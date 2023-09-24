import Start from "./components/GameStart";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import GameStart from "./components/GameStart";
import GamePlay from "./components/GamePlay";
import uniqid from "uniqid";
import Login from "./components/Login";

function App() {
  const resolveIn = (secs) => {
    return new Promise((resolve) => {
      setTimeout(resolve, secs * 1000);
    });
  };

  return <Login />;
}

export default App;
