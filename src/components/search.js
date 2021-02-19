import "../styles/search.css";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Used Hooks here

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const textInputRef = useRef();
  const [recentSearchValues, setRecentSearchValues] = useState([]);

  useEffect(() => {
    textInputRef.current.focus();

    const pastSearches = localStorage.getItem("RECENTSEARCHES");
    if (pastSearches) {
      const pastSearchesArray = JSON.parse(pastSearches);
      setRecentSearchValues(pastSearchesArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("RECENTSEARCHES", JSON.stringify(recentSearchValues));
  }, [recentSearchValues]);

  const onSearch = () => {
    performSearch(searchValue);

    setSearchValue("");
    settingOfRecentSearchValues();
  };

  const performSearch = (value) => {
    const url = `https://www.google.com/search?q=${value}`;
    window.open(url);
  };

  const settingOfRecentSearchValues = () => {
    if (recentSearchValues.length >= 6) {
      recentSearchValues.pop();
      recentSearchValues.unshift(searchValue);
      setRecentSearchValues([...recentSearchValues]);
    } else {
      setRecentSearchValues([searchValue, ...recentSearchValues]);
    }
  };

  const onSearchInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  const clearRecentSearchValues = (event) => {
    setRecentSearchValues([]);
  };

  // added a useRef for input field, so it autofocuses when componenet mounts
  // took out part of the onSearch function which opens up the window with searchValue, and put it into performSearch function
  // so could call performSearch for the onclick in the list of recent searches

  return (
    <div className="contentItem search">
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
      <button
        className="searchButton"
        onClick={onSearch}
        disabled={searchValue.length === 0}
      >
        Search
      </button>
      <div className="wrapRecentSearches">
        <div className="recentSearchesTitle">
          <p>Recent searches</p>
          <button
            className="clearRecentSearches"
            onClick={clearRecentSearchValues}
          ></button>
        </div>

        <ul className="recentSearches">
          <AnimatePresence>
            {recentSearchValues.map((value, id) => {
              return (
                <motion.li
                  inital={{ opacity: 0, y: -150 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -150 }}
                  transition={{ duration: 0.8 }}
                  key={id + 1}
                  className="recentSearch"
                  onClick={() => performSearch(value)}
                >
                  {value}
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}

export default Search;
