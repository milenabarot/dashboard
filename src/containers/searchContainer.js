import createReactClass from "create-react-class";
import Search from "../components/search";

const SearchContainer = createReactClass({
  getInitialState() {
    return {
      searchValue: "",
    };
  },

  editSearchValue(event) {
    this.setState({
      searchValue: event.target.value,
    });
  },

  onSearch() {
    const url = `https://www.google.com/search?q=${this.state.searchValue}`;
    window.open(url);

    this.setState({
      searchValue: "",
    });
  },

  onSearchInputKeyDown(event) {
    if (event.key === "Enter") {
      this.onSearch();
    }
  },

  render() {
    return (
      <Search
        searchValue={this.state.searchValue}
        editSearchValue={this.editSearchValue}
        onSearch={this.onSearch}
        onSearchInputKeyDown={this.onSearchInputKeyDown}
      />
    );
  },
});

export default SearchContainer;
