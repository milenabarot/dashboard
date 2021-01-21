import "../styles/header.css";
import Weather from "./weather";
import Title from "./title";
import { CircleLoader } from "react-spinners";
import { css } from "@emotion/react";

// Using react spinner for when API weather request is loading, using tenary operator & passed down the prop of isLoading,
// using inline conditional operator with curly brackets

const override = css`
  margin: 25px;
`;

function Header(props) {
  return (
    <div className="header">
      <Title title={props.title} updateTitle={props.updateTitle} />
      {props.isLoading ? (
        <CircleLoader css={override} color="darkblue" size={100} />
      ) : (
        <Weather forecast={props.forecast} currentDay={props.currentDay} />
      )}
    </div>
  );
}

export default Header;
