import "../styles/search.css";
import { useEffect, useRef, useState } from "react";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const textInputRef = useRef();

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  const onSearch = () => {
    const url = `https://www.google.com/search?q=${searchValue}`;
    window.open(url);

    setSearchValue("");
  };

  const onSearchInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  // added a ref for input field, so it autofocuses when componenet mounts

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
        value={searchValue}
        onInput={(event) => setSearchValue(event.target.value)}
        onKeyDown={onSearchInputKeyDown}
        ref={textInputRef}
      />
      <button className="searchButton" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
