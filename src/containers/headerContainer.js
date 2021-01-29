import Header from "../components/header";
import createReactClass from "create-react-class";

import moment from "moment";
import axios from "axios";
import convertTemperature from "../helpers/convertTemperature";
import newDate from "../helpers/newDate";

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
      forecast: [],
      isLoading: true,
      currentDay: {
        temp: 0,
        weather: "",
        sunrise: "",
        sunset: "",
        icon: "",
      },
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
        const temp = convertTemperature(response.data.current.temp);
        // const temp = Math.round(Number(response.data.current.temp) - 273.15);
        const weather = response.data.current.weather[0].main;
        const sunriseDate = newDate(response.data.current.sunrise);
        const sunrise = moment(sunriseDate).format("LT");
        const sunsetDate = newDate(response.data.current.sunset);
        const sunset = moment(sunsetDate).format("LT");
        const icon = response.data.current.weather[0].icon;

        const forecast = response.data.daily.map((dailyDataItem) => {
          const dayIndex = newDate(dailyDataItem.dt).getDay();
          const day = days[dayIndex];
          // const dayTemp = Math.round(Number(dailyDataItem.temp.day) - 273.15);
          const dayTemp = convertTemperature(dailyDataItem.temp.day);
          const dayWeather = dailyDataItem.weather[0].main;
          const dayIcon = dailyDataItem.weather[0].icon;
          return {
            day: day,
            temperature: dayTemp,
            weather: dayWeather,
            icon: dayIcon,
          };
        });
        // we don't want the current day to display in forecast array, and it will always be
        // index 0, so by deleting it we skip over it
        delete forecast[0];
        this.setState({
          forecast: forecast,
          isLoading: false,
          currentDay: {
            temp: temp,
            weather: weather,
            sunrise: sunrise,
            sunset: sunset,
            icon: icon,
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },

  // switch statement to change the favicon icon depending on what currentDay weather is
  componentDidUpdate() {
    localStorage.setItem("TITLE", this.state.title);

    const favicon = document.getElementById("favicon");

    switch (this.state.currentDay.weather) {
      case "Clouds":
        favicon.href = "blueclouds.png";
        break;
      case "Rain":
        favicon.href = "rainyicon.png";
        break;
      case "Clear":
        favicon.href = "sunclearicon.png";
        break;
      case "Snow":
        favicon.href = "snow.png";
        break;

      default:
        favicon.href = "leaficon.png";
    }
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
        forecast={this.state.forecast}
        currentDay={this.state.currentDay}
        isLoading={this.state.isLoading}
      />
    );
  },
});

export default HeaderContainer;

// const favicon = document.getElementById('favicon')

//     if (this.state.currentDay.weather === 'Clouds') {
//       favicon.href = 'cloudicon.png'
// favicon.href = `${this.state.currentDay.icon}`
