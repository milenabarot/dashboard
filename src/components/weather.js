function Weather(props) {
  return (
    <div>
      <p>{`${props.temperature} C`}</p>
      <p>{props.weather}</p>

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
              <p>{dayInfo.weather}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Weather;
