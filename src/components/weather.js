import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { followCursor } from "tippy.js";

function Weather(props) {
  return (
    <div>
      <p>{`${props.temperature} C`}</p>

      <Tippy
        content={props.weather}
        followCursor
        plugins={[followCursor]}
        className={`weatherTooltip weatherTooltip-${props.weather}`}
      >
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`}
          alt={props.weather}
        ></img>
      </Tippy>
      <p>{`Sunrise ${props.sunrise}`}</p>
      <p>{`Sunset ${props.sunset}`}</p>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >
        {props.forecast.map((dayInfo) => {
          return (
            <li style={{ padding: "10px" }}>
              <p>{dayInfo.day}</p>
              <p>{`${dayInfo.temperature} C`}</p>
              <Tippy
                content={dayInfo.weather}
                followCursor
                plugins={[followCursor]}
                className={`weatherTooltip weatherTooltip-${dayInfo.weather}`}
              >
                <img
                  style={{ maxWidth: "70px" }}
                  src={`http://openweathermap.org/img/wn/${dayInfo.icon}@4x.png`}
                  alt={dayInfo.weather}
                ></img>
              </Tippy>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Weather;
