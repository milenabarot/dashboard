import "../styles/search.css";
function Search(props) {
  return (
    <div className="search">
      <img
        className="googleIcon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        alt=""
      />
      <input
        className="searchValue"
        type="text"
        value={props.searchValue}
        onInput={props.editSearchValue}
        onKeyDown={props.onSearchInputKeyDown}
      />
      <button className="searchButton" onClick={props.onSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
