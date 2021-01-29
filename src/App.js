import "./styles/App.css";
import createReactClass from "create-react-class";
import HeaderContainer from "./containers/headerContainer";
import DateTimeContainer from "./containers/dateTimeContainer";
import Search from "./components/search";

const App = createReactClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <DateTimeContainer />
        <Search />
      </div>
    );
  },
});

export default App;
