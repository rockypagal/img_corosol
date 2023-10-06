import { useEffect, useRef, useState } from "react";
import img1 from "./accets/img/pexels-dalaryizmi-18004502.jpg";
import img2 from "./accets/img/pexels-fidan-nazim-qizi-17118488.jpg";
import img3 from "./accets/img/pexels-rahib-yaqubov-14842283.jpg";
import img4 from "./accets/img/pexels-wadim-ł-17926548.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
function Carousel() {
  const [itemNumber, setItemNumber] = useState(0);
  const imgRef = useRef(null);
  const images = [img2, img1, img3, img4, img2, img1, img3, img4];
  const handleClick = (action) => {
    if (action === "Right") {
      if (itemNumber >= images.length-1) {
        setItemNumber(0);
        return;
      }
      setItemNumber(itemNumber + 1);
    }

    if (action === "Left") {
      if (itemNumber <= 0) {
        setItemNumber(images.length-1);
        return;
      }
      setItemNumber(itemNumber - 1);
    }
  };

  useEffect(() => {
    const changeSlide = setInterval(() => {
      handleClick("Right");
    }, 3000);

    return ()=>clearInterval(changeSlide);
  }, [itemNumber]);
  return (
    <div className="carousel">
      <div className="banner">
        {images.map((img, index) => {
          let postion = "";
          if (itemNumber === index) {
            postion = "showImg";
          }
          if (
            index === itemNumber - 1 ||
            (itemNumber === 0 && index === images.length)
          )
            postion = "prev";
          if (index === itemNumber + 1) postion = "next";
          return (
            <div className={`${postion} img`} key={index}>
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>{" "}
      <div className="controls">
        <span onClick={() => handleClick("Right")}>
          <BiChevronRight />
        </span>{" "}
        <span onClick={() => handleClick("Left")}>
          <BiChevronLeft />
        </span>
      </div>

    </div>
  );
}

export default Carousel;
