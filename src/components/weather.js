import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { followCursor } from "tippy.js";
import getWeatherToolTipClassName from "../helpers/getWeatherToolTipClassName";
import "../styles/weather.css";
import Loader from "./loader";

function Weather(props) {
  return props.isLoading ? (
    <Loader />
  ) : (
    <div className="contentItem weather">
      <p className="currentDayTitle">Today's weather</p>
      <p className="temperatureC">{`${props.currentDay.temp} C`}</p>

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
          className="currentDayImage"
        ></img>
      </Tippy>
      <p className="currentDaySunrise">{`Sunrise ${props.currentDay.sunrise}`}</p>
      <p>{`Sunset ${props.currentDay.sunset}`}</p>

      <ul className="weatherForecast">
        {props.forecast.map((dayInfo) => {
          return (
            <li className="weatherForecastItem">
              <p>{dayInfo.day}</p>
              <p>{`${dayInfo.temperature} C`}</p>
              <Tippy
                content={dayInfo.weather}
                followCursor
                plugins={[followCursor]}
                className={getWeatherToolTipClassName(dayInfo.weather)}
              >
                <img
                  className="weatherForecastItemImage"
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
