import ClockWrap from "./clockWrap";

function DateTime(props) {
  return (
    <div>
      <p>{props.date}</p>
      <ClockWrap></ClockWrap>
    </div>
  );
}

export default DateTime;
