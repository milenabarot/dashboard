import "./styles/App.css";
import createReactClass from "create-react-class";

import Search from "./components/search";
import Images from "./components/images";

import NavBarContainer from "./containers/navBarContainer";
import WeatherContainer from "./containers/weatherContainer";

const App = createReactClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className="App">
        <NavBarContainer />
        <div className="contentWrap">
          <Images />
          <Search />
          <WeatherContainer />
        </div>
      </div>
    );
  },
});

export default App;
