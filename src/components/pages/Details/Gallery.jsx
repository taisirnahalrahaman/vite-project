import React, { useState } from "react";
import ImageOne from "../../../assets/images/Details/Gallery/One.png";
import ImageFour from "../../../assets/images/Details/Gallery/Two.png";
import ImageTwo from "../../../assets/images/Details/Gallery/Three.png";
import ImageThree from "../../../assets/images/Details/Gallery/Four.png";
import Hero from "../../../assets/images/Details/Gallery/Hero.png";
import Items from "../../../assets/ProductList/products";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Gallery = ({ Index }) => {
  const slides = [
    {
      url: Items[Index].Details_Image.One,
    },
    {
      url: Items[Index].Details_Image.Two,
    },
    {
      url: Items[Index].Details_Image.Three,
    },

    {
      url: Items[Index].Details_Image.Four,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="w-full h-full  m-auto  relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-gray-400 bg-no-repeat bg-center bg-cover duration-500 "
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Gallery;