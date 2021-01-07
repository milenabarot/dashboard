import createReactClass from "create-react-class";
import moment from "moment";

const ClockWrap = createReactClass({
  getInitialState() {
    return {
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
    return <div className="Clock">{this.state.time}</div>;
  },
});

export default ClockWrap;
