import Header from "../components/header";
import createReactClass from "create-react-class";

import moment from "moment";
import axios from "axios";

const API_KEY = "3d7ef965d57061670b60c97811df6490";
const LATITUDE = "51.135150";
const LONGITUDE = "-0.018840";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const HeaderContainer = createReactClass({
  getInitialState() {
    return {
      title: "",
      date: moment().format("LL"),
      temp: 0,
      weather: "",
      forecast: [],
    };
  },

  componentDidMount() {
    const updatedTitle = localStorage.getItem("TITLE");
    if (updatedTitle) {
      this.setState({
        title: updatedTitle,
      });
    }

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`
      )
      .then((response) => {
        const temp = Math.round(Number(response.data.current.temp) - 273.15);
        const weather = response.data.current.weather[0].main;
        const forecast = response.data.daily.map((dailyDataItem) => {
          const dayIndex = new Date(dailyDataItem.dt * 1000).getDay();
          const day = days[dayIndex];
          const dayTemp = Math.round(Number(dailyDataItem.temp.day) - 273.15);
          const dayWeather = dailyDataItem.weather[0].main;
          return {
            day: day,
            temperature: dayTemp,
            weather: dayWeather,
          };
        });
        // we don't want the current day to display in forecast array, and it will always be
        // index 0, so by deleting it we skip over it
        delete forecast[0];
        this.setState({
          temp: temp,
          weather: weather,
          forecast: forecast,
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
      <Header
        title={this.state.title}
        updateTitle={this.updateTitle}
        temperature={this.state.temp}
        weather={this.state.weather}
        forecast={this.state.forecast}
      />
    );
  },
});

export default HeaderContainer;
