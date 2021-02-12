import createReactClass from "create-react-class";
import NavBar from "../components/navBar";

//took out title functionality from header component to put into navbar

const NavBarContainer = createReactClass({
  getInitialState() {
    return {
      title: "",
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
    return <NavBar title={this.state.title} updateTitle={this.updateTitle} />;
  },
});

export default NavBarContainer;
