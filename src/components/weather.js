import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { followCursor } from "tippy.js";
import getWeatherToolTipClassName from "../helpers/getWeatherToolTipClassName";

function Weather(props) {
  return (
    <div className="loadingData">
      <p>{`${props.currentDay.temp} C`}</p>

      <Tippy
        content={props.currentDay.weather}
        followCursor
        plugins={[followCursor]}
        className={getWeatherToolTipClassName(props.currentDay.weather)}
        // className={`weatherTooltip weatherTooltip-${props.currentDay.weather}`}
      >
        <img
          src={`http://openweathermap.org/img/wn/${props.currentDay.icon}@4x.png`}
          alt={props.currentDay.weather}
        ></img>
      </Tippy>
      <p>{`Sunrise ${props.currentDay.sunrise}`}</p>
      <p>{`Sunset ${props.currentDay.sunset}`}</p>

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
                className={getWeatherToolTipClassName(dayInfo.weather)}
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
