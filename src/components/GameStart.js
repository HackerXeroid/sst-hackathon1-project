import triangle from "../images/bg-triangle.svg";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissor from "./Scissor";

export default function (props) {
  return (
    <div className="relative w-fit mb-24 scale-110">
      <div
        className="absolute top-full left-1/2 -translate-y-1/2 -translate-x-1/2"
        onClick={() => props.setCurrentUserChoice("rock")}
      >
        <Rock />
      </div>
      <div
        className="absolute -translate-y-1/2 -translate-x-1/2"
        onClick={() => props.setCurrentUserChoice("paper")}
      >
        <Paper />
      </div>
      <div
        className="absolute left-full -translate-x-1/2 -translate-y-1/2"
        onClick={() => props.setCurrentUserChoice("scissor")}
      >
        <Scissor />
      </div>
      <img src={triangle} />
    </div>
  );
}
