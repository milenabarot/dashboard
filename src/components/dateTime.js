import Clock from "./clock";
import Date from "./date";

function DateTime(props) {
  return (
    <div>
      <Date date={props.date} />
      <Clock time={props.time} />
    </div>
  );
}

export default DateTime;
