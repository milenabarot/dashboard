import "./styles/App.css";
import createReactClass from "create-react-class";
import HeaderContainer from "./containers/headerContainer";
import DateTimeContainer from "./containers/dateTimeContainer";

const App = createReactClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <DateTimeContainer />
      </div>
    );
  },
});

export default App;
