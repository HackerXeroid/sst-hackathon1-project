export default function (props) {
  return (
    <div className="bg-[#FBFBFB] rounded-lg py-5 px-12">
      <p className="uppercase text-[#2a46c0] text-center text-base tracking-widest font-semibold">
        Score
      </p>
      <p className="text-[#534F66] font-bold text-6xl -tracking-[0.25rem] text-center">
        {props.score}
      </p>
    </div>
  );
}
