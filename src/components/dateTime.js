import ClockWrap from "./clockWrap";
import Date from "./date";
import "../styles/dateTime.css";

function DateTime(props) {
  return (
    <div className="dateTime">
      <Date date={props.date} />
      <ClockWrap time={props.time} />
    </div>
  );
}

export default DateTime;
