import { useState, useEffect } from "react";
import "../styles/images.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Select from "react-select";
import Loader from "./loader";
import { AnimatePresence, motion } from "framer-motion";
import { components } from "react-select";

const PEXELS_API_KEY =
  "563492ad6f917000010000019638a7e317574370b239afeca6603408";

// Using Hooks and using fetch instead of axios for get request
// added in select library and passed in options array to change search query value
// framer motion to put animation on select dropdown
// removed isShowingDropdown state and chevron code

function Images() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState({
    value: "landscape",
    label: "Landscape",
  });
  // const [isShowingDropdown, setIsShowingDropdown] = useState(false);

  const options = [
    { value: "landscape", label: "Landscape" },
    { value: "sunset sky", label: "Sunset Sky" },
    { value: "sunrise sky", label: "Sunrise sky" },
    { value: "mountains", label: "Mountains" },
  ];

  useEffect(() => {
    fetch(
      `https://api.pexels.com/v1/search?query=${searchQuery.value}&per_page=15&orientation=portrait`,
      {
        headers: { Authorization: PEXELS_API_KEY },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const photosArray = data.photos.map((photoItem) => {
          return {
            value: photoItem.src.large,
            url: photoItem.url,
          };
        });
        setImages(photosArray);

        setIsLoading(false);
      });
  }, [searchQuery]);

  const ChangeImages = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  // div used instead of img tag in carousel due to img not covering whole background of each individual slide

  const Menu = (menuProps) => (
    <AnimatePresence>
      <motion.div
        inital={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: -50 }}
        exit={{ opacity: 0, y: -150 }}
        transition={{ duration: 0.7 }}
      >
        <components.Menu {...menuProps}>{menuProps.children}</components.Menu>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="contentItem images">
      <div className="imageCarousel">
        {isLoading ? (
          <Loader />
        ) : (
          <CarouselProvider
            naturalSlideWidth={400}
            naturalSlideHeight={500}
            totalSlides={15}
            visibleSlides={1}
            interval={10000}
            isPlaying={true}
            infinite={true}
          >
            <Slider>
              {images.map((image, index) => {
                return (
                  <Slide index={index}>
                    <a href={image.url} target="_blank" rel="noreferrer">
                      <div
                        className="slideImage"
                        style={{ backgroundImage: `url(${image.value})` }}
                      ></div>
                    </a>
                  </Slide>
                );
              })}
            </Slider>
          </CarouselProvider>
        )}
      </div>
      <div>
        <div className="selectArea">
          <Select
            options={options}
            value={searchQuery}
            classNamePrefix="selectDropdownImages"
            isSearchable={false}
            autoFocus={false}
            onChange={ChangeImages}
            menuPlacement="top"
            components={{ Menu }}
          ></Select>
        </div>
      </div>
    </div>
  );
}

export default Images;

/* code before added in select library 
/* <select
        name="searchQuery"
        id="searchQuery"
        onChange={(event) => setSearchQuery(event.target.value)}
      >
        <option value="landscape">landscape</option>
        <option value="Sunset Sky">Sunset Sky</option>
        <option value="Sunrise Sky">Sunrise Sky</option>
        <option value="Mountains">Mountains</option>
      </select> */

/* code for isShowingDropdown with the chevron to display the select onclick
         /* <button
          className="isShowingDropdownButton"
          style={{
            backgroundImage: isShowingDropdown
              ? `url(${process.env.PUBLIC_URL + "/up-chevron.png"})`
              : `url(${process.env.PUBLIC_URL + "/down-chevron.png"})`,
          }}
          onClick={() => setIsShowingDropdown(!isShowingDropdown)}
        ></button> */

/* {isShowingDropdown ? ( */
