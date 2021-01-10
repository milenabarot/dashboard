import createReactClass from "create-react-class";
import DateTime from "../components/dateTime";
import moment from "moment";
import axios from "axios";

const DateTimeContainer = createReactClass({
  getInitialState() {
    return {
      date: moment().format("LL"),
      time: moment().format("LTS"),
    };
  },

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  },

  tick() {
    this.setState({
      time: moment().format("LTS"),
    });
  },

  render() {
    return <DateTime date={this.state.date} time={this.state.time} />;
  },
});

export default DateTimeContainer;
