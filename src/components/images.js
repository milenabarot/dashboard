import { useState, useEffect } from "react";
import "../styles/images.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Select from "react-select";
import Loader from "./loader";
import { AnimatePresence, motion } from "framer-motion";

const PEXELS_API_KEY =
  "563492ad6f917000010000019638a7e317574370b239afeca6603408";

// Hooks and not using fetch instead of axios for get request
// added in select library and passed in options array to change search query value
// framer motion to put animation on select isshowingdropdown

function Images() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState({
    value: "landscape",
    label: "Landscape",
  });
  const [isShowingDropdown, setIsShowingDropdown] = useState(false);

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
          return photoItem.src.large;
        });
        setImages(photosArray);
        setIsLoading(false);
      });
  }, [searchQuery]);

  const ChangeImages = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  // div used instead of img tag in carousel due to img not covering whole background of each individual slide

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
                    <div
                      className="slideImage"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                  </Slide>
                );
              })}
            </Slider>
          </CarouselProvider>
        )}
      </div>
      <button
        className="isShowingDropdownButton"
        style={{
          backgroundImage: isShowingDropdown
            ? `url(${process.env.PUBLIC_URL + "/up-chevron.png"})`
            : `url(${process.env.PUBLIC_URL + "/down-chevron.png"})`,
        }}
        onClick={() => setIsShowingDropdown(!isShowingDropdown)}
      ></button>
      <AnimatePresence>
        {isShowingDropdown ? (
          <motion.div
            transition={{ duration: 0.6 }}
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            className="selectArea"
          >
            <Select
              options={options}
              value={searchQuery}
              classNamePrefix="selectDropdownImages"
              isSearchable={false}
              autoFocus={false}
              onChange={ChangeImages}
              menuPlacement="top"
            ></Select>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* <select
        name="searchQuery"
        id="searchQuery"
        onChange={(event) => setSearchQuery(event.target.value)}
      >
        <option value="landscape">landscape</option>
        <option value="Sunset Sky">Sunset Sky</option>
        <option value="Sunrise Sky">Sunrise Sky</option>
        <option value="Mountains">Mountains</option>
      </select> */}
    </div>
  );
}

export default Images;
