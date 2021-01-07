import "./styles/App.css";
import Header from "./components/header";
import createReactClass from "create-react-class";
import Weather from "./components/weather";
import DateTime from "./components/dateTime";
import Clockwrap from "./components/clockWrap";
import moment from "moment";

const App = createReactClass({
  getInitialState() {
    return {
      title: "",
      date: moment().format("LL"),
    };
  },

  componentDidMount() {
    const updatedTitle = localStorage.getItem("TITLE");
    if (updatedTitle) {
      this.setState({
        title: updatedTitle,
      });
    }
  },

  componentDidUpdate() {
    localStorage.setItem("TITLE", this.state.title);
  },

  updateTitle(event) {
    this.setState({
      title: event.target.value,
    });
  },

  render() {
    document.title = this.state.title;
    return (
      <div className="App">
        <Header title={this.state.title} updateTitle={this.updateTitle} />
        <Weather />
        <DateTime date={this.state.date} />
      </div>
    );
  },
});

export default App;
