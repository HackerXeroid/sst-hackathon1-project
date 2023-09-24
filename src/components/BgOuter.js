import BgInner from "./BgInner";

export default function (props) {
  return (
    <div
      className={`${props.className} w-48 h-48 rounded-full flex justify-center items-center border-b-8`}
    >
      <BgInner image={props.image} />
    </div>
  );
}
