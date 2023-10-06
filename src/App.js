import { useEffect, useRef, useState } from "react";
import "./App.css";
import img1 from "./accets/img/pexels-fidan-nazim-qizi-17118488.jpg";
import img2 from "./accets/img/pexels-dalaryizmi-18004502.jpg";
import img3 from "./accets/img/pexels-wadim-ł-17926548.jpg";
import img4 from "./accets/img/pexels-rahib-yaqubov-14842283.jpg";
import Carousel from "./Carousel";
import CarouselTwo from "./CarouselTwo";
const imgList = [img1, img2, img3, img4];
const imgList2 = [img2, img1, img4, img3];
const imgList3 = [img3, img4, img2, img1];

function App() {
  return (
    <div className="App">
      {/* <Carousel/> */}
      <CarouselTwo imgList={imgList} atuoChange={2500} />

    </div>
  );
}

export default App;
