import React from "react";
import { ArrowRight } from "lucide-react";
import Vases from "/src/assets/images/Vases.png";
import Camel from "/src/assets/images/Camel.png";
import Art from "/src/assets/images/Art.png";
import Watch from "/src/assets/images/Watch.png";
import Angel from "/src/assets/images/Angel.png";

const Featured = () => {
  const images = [Vases, Camel, Art, Watch, Angel];

  return (
    <div className="p-6 mt-20 mb-20">
      <div className="ml-4 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 sm:gap-0">
        <h1 className="text-4xl font-bold">Featured art categories</h1>
        <a
          href="#"
          className="text-blue-600  mr-18 text-md font-semibold flex items-center gap-2 "
        >
          View All Categories
          <ArrowRight size={22} />
        </a>
      </div>

      <div
        className="mt-10  ml-4 flex overflow-x-auto gap-x-4 sm:overflow-x-scroll no-scrollbar"
      >
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="flex-shrink-0  bg-white"
          >
            <img
              src={imgSrc}
              alt="art-category"
              className="w-[230px] h-[355px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

