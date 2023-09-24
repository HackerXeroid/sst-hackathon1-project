import Rock from "./Rock";
import Paper from "./Paper";
import Scissor from "./Scissor";
import Empty from "./Empty";
import { useState } from "react";

const resolveIn = (secs) => {
  return new Promise((resolve) => setTimeout(resolve, secs * 1000));
};

const randomIn = (arr) => {
  let index = Math.floor(Math.random() * arr.length);
  return index;
};

// Paper -> Rock
// Rock -> Scissor
// Scissor -> Paper

const options = ["rock", "paper", "scissor"];
const mapOptions = [<Rock />, <Paper />, <Scissor />];

export default function (props) {
  const [otherPlayerChoice, setOtherPlayerChoice] = useState("");

  if (otherPlayerChoice === "") {
    resolveIn(1).then(() => {
      setOtherPlayerChoice(randomIn(options));
    });
  }

  const oppCh = options[otherPlayerChoice];
  const plaCh = props.currentUserChoice;
  oppCh === plaCh && console.log("It's a tie");

  if (typeof otherPlayerChoice === "number") {
    if (
      (plaCh === "paper" && oppCh === "rock") ||
      (plaCh === "rock" && oppCh === "scissor") ||
      (plaCh === "scissor" && oppCh === "paper")
    )
      console.log("You won");
  }
  // if (plaCh === "paper" && oppCh === "rock") {
  //   console.log("You won")
  // } else if (plaCh === "rock" && oppCh === "scissor") {
  // }

  return (
    <div className="flex gap-32 items-center">
      <div className="scale-125">
        {props.currentUserChoice === "rock" && <Rock />}
        {props.currentUserChoice === "paper" && <Paper />}
        {props.currentUserChoice === "scissor" && <Scissor />}
      </div>
      {otherPlayerChoice === "" && <Empty />}
      <div className="scale-125">{mapOptions[otherPlayerChoice]}</div>
    </div>
  );
}
