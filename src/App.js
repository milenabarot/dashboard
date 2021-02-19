import "./styles/App.css";
import createReactClass from "create-react-class";

import Search from "./components/search";
import Images from "./components/images";

import NavBarContainer from "./containers/navBarContainer";
import WeatherContainer from "./containers/weatherContainer";

//Images and search using hooks to practice knowledge
// used a mix of hooks and classes in this project

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
