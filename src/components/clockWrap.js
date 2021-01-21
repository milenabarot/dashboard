import Clock from "react-clock";
import "react-clock/dist/Clock.css";

function ClockWrap(props) {
  return (
    <div className="clockWrap">
      <Clock
        className="dashboardClock"
        value={props.time}
        size={130}
        renderMinuteMarks={false}
        hourHandWidth={5}
        minuteHandWidth={3}
        minuteHandOppositeLength={30}
      />
    </div>
  );
}

export default ClockWrap;
