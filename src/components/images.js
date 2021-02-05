import { useState, useEffect } from "react";
import "../styles/images.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Select from "react-select";
import Loader from "./loader";

const PEXELS_API_KEY =
  "563492ad6f917000010000019638a7e317574370b239afeca6603408";

// Hooks and not using fetch instead of axios for get request
// added in select library and passed in options array to change search query value

function Images() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState({
    value: "landscape",
    label: "Landscape",
  });
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
    <div className="images">
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

      <div className="selectArea">
        <label className="selectText" htmlFor="">
          Select image type...
        </label>
        <Select
          options={options}
          value={searchQuery}
          classNamePrefix="selectDropdownImages"
          isSearchable={false}
          autoFocus={false}
          onChange={ChangeImages}
        ></Select>
      </div>

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
