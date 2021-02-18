import Title from "./title";
import DateTimeContainer from "../containers/dateTimeContainer";
import "../styles/navBar.css";

function NavBar(props) {
  return (
    <div class="navBar">
      <Title title={props.title} updateTitle={props.updateTitle} />
      <DateTimeContainer />
    </div>
  );
}

export default NavBar;
