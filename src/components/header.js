import "../styles/header.css";
import Weather from "./weather";
import Title from "./title";

function Header(props) {
  return (
    <div className="header">
      <Title title={props.title} updateTitle={props.updateTitle} />
      <Weather
        temperature={props.temperature}
        weather={props.weather}
        forecast={props.forecast}
      />
    </div>
  );
}

export default Header;
