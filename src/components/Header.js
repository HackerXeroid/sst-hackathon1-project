import logo from "../images/logo.svg";
import Score from "./Score";

export default function (props) {
  return (
    <div className="pt-20">
      <div className="border-2 rounded-lg border-[#5E6F89] py-4 px-6 flex justify-between items-center max-w-3xl mx-auto scale-110">
        <div className="inline-block">
          <img src={logo} />
        </div>
        <Score score={props.score} />
      </div>
    </div>
  );
}
