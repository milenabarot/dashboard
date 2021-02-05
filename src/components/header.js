import "../styles/header.css";
import Weather from "./weather";
import Title from "./title";
import Loader from "./loader";

// Using react spinner for when API weather request is loading, using tenary operator & passed down the prop of isLoading,
// using inline conditional operator with curly brackets

function Header(props) {
  return (
    <div className="header">
      <Title title={props.title} updateTitle={props.updateTitle} />
      {props.isLoading ? (
        <Loader />
      ) : (
        <Weather forecast={props.forecast} currentDay={props.currentDay} />
      )}
    </div>
  );
}

export default Header;
