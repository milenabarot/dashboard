import "./styles/App.css";
import createReactClass from "create-react-class";
import HeaderContainer from "./containers/headerContainer";
import DateTimeContainer from "./containers/dateTimeContainer";
import SearchContainer from "./containers/searchContainer";

const App = createReactClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <DateTimeContainer />
        <SearchContainer />
      </div>
    );
  },
});

export default App;
