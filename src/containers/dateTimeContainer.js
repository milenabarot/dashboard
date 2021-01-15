import createReactClass from "create-react-class";
import DateTime from "../components/dateTime";
import moment from "moment";
import axios from "axios";
import Clock from "react-clock";

const DateTimeContainer = createReactClass({
  getInitialState() {
    return {
      date: moment().format("LL"),
      time: new Date(),
    };
  },

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  },

  tick() {
    this.setState({
      time: new Date(),
    });
  },

  render() {
    return <DateTime date={this.state.date} time={this.state.time} />;
  },
});

export default DateTimeContainer;
