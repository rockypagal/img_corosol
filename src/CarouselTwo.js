import React, { useEffect, useState } from "react";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const CarouselTwo = ({ imgList, atuoChange = 2000 }) => {
  const [active, setAcitve] = useState(0);

  const handleNext = () => {
    setAcitve(active + 1);
  };
  const handlePrev = () => {
    setAcitve(active - 1);
  };

  useEffect(() => {
    const rotation = setInterval(() => {
      setAcitve(active + 1);
    }, atuoChange);

    return () => {
      return clearInterval(rotation);
    };
  }, [active]);

  return (
    <div className="carContainer">
      <div className="carSlider">
        <div className="slides">
          {imgList.map((img, index) => {
            let showImg = "none";

            if (active < 0) {
              setAcitve(imgList.length - 1);
            }

            if (active >= imgList.length) {
              setAcitve(0);
            }

            if (index === active) {
              showImg = "activeSlide";
            }

            if (index === active - 1) {
              showImg = "prevSlide";
            }

            if (index === imgList.length - 1 && active === 0) {
              showImg = "prevSlide";
            }

            return (
              <div key={index} className={`${showImg} nextSlide`}>
                <img src={img} />
              </div>
            );
          })}

          <div className="controls">
            <span onClick={handleNext}>
              <BiChevronRight />
            </span>
            <span onClick={handlePrev}>
              <BiChevronLeft />
            </span>
          </div>
        </div>
        <div className="buttons">
          {imgList.map((img, index) => {
            return (
              <div
                key={index}
                className={
                  index === active ? "carActive activeButton " : "carActive"
                }
                onClick={() => setAcitve(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselTwo;
