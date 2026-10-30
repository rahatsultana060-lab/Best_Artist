

import React, { useState } from "react";
import Masterthree from "../assets/images/Masterthree.png";
import Mastertwo from "../assets/images/Mastertwo.png";
import Fence from "../assets/images/Fence.png";

const images = [
  { src: Masterthree, title: "Splash" },
  { src: Mastertwo, title: "Colorful Face" },
  { src: Fence, title: "Fence Spying" },
];

function Incredible() {
  const [currentIndex, setCurrentIndex] = useState(1); 

  const prevImage = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="h-[600px] bg-[#3b4a5a] text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-12">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 mx-auto">
        <div className="w-full md:max-w-md px-4 text-center md:text-left md:flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Be incredible</h1>
          <p className="text-slate-300 mb-6 text-justify md:text-left text-sm sm:text-base">
            Nec ultricies eget placerat ultricies eleifend dignissim aliquet
            sapien. Senectus vestibulum, eget erat at et congue cursus pretium.
            Nec ultricies eget placerat ultricies eleifend dignissim aliquet
            sapien. Senectus .
          </p>
          <button className="border border-white px-5 py-2 rounded hover:bg-white hover:text-[#3b4a5a] transition transform hover:scale-105">
            Explore Xinder
          </button>
        </div>

        <div className="w-full md:flex-1 max-w-xl xl:max-w-2xl relative">
          <div className="relative w-full flex items-center justify-center">
            <button
              onClick={prevImage}
              className="absolute left-18 z-10 bg-white text-black rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow hover:scale-110 transition hidden sm:flex"
            >
              &#8249;
            </button>

            <div className="w-full flex overflow-x-auto no-scrollbar sm:hidden">
              <div className="flex gap-4 px-4 py-2">
                {images.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-56 h-72 rounded-xl overflow-hidden flex-shrink-0 opacity-100"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-white text-black text-xs sm:text-sm px-2 py-1">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden sm:flex w-full items-center justify-center overflow-hidden">
              <div className="flex h-[350px] items-center justify-center gap-4 mx-10">
                {images.map((item, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <div
                      key={index}
                      className={`relative rounded-xl overflow-hidden transition-all duration-300 flex-shrink-0 ${
                        isActive ? "w-64 h-80" : "w-24 h-32 opacity-40"
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute bottom-0 w-full text-xs sm:text-sm px-2 py-1 ${
                          isActive
                            ? "bg-white text-black font-semibold"
                            : "bg-white text-gray-500"
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-18  bg-white text-black rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow hover:scale-110 transition hidden sm:flex"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Incredible;

 