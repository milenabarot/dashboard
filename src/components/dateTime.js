import ClockWrap from "./clockWrap";
import Date from "./date";

function DateTime(props) {
  return (
    <div>
      <Date date={props.date} />
      <ClockWrap time={props.time} />
    </div>
  );
}

export default DateTime;
