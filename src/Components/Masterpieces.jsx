import React from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Masterone from "../assets/images/Masterone.png";
import Mastertwo from "../assets/images/Mastertwo.png";
import Masterthree from "../assets/images/Masterthree.png";
import Masterfour from "../assets/images/Masterfour.png";
import UserThumb from "../assets/images/UserThumb.png";
import UserThumbOne from "../assets/images/UserThumbOne.png";
import UserThumbTwo from "../assets/images/UserThumbTwo.png";
import UserThumbThree from "../assets/images/UserThumbThree.png";

const data = [
  { image: Masterone, thumbnail: UserThumb, title: "Flower Decoration", author: "Melvina Spring" },
  { image: Mastertwo, thumbnail: UserThumbOne, title: "Classic Vase", author: "Rwanda Melflor" },
  { image: Masterthree, thumbnail: UserThumbTwo, title: "Abstract Splash", author: "Rwanda Melflor" },
  { image: Masterfour, thumbnail: UserThumbThree, title: "Modern Face", author: "Melvina Spring" },
  { image: Masterone, thumbnail: UserThumb, title: "Flower Decoration", author: "Melvina Spring" },
  { image: Mastertwo, thumbnail: UserThumbOne, title: "Classic Vase", author: "Rwanda Melflor" },
  { image: Masterthree, thumbnail: UserThumbTwo, title: "Abstract Splash", author: "Rwanda Melflor" },
  { image: Masterfour, thumbnail: UserThumbThree, title: "Modern Face", author: "Melvina Spring" },
  { image: Masterthree, thumbnail: UserThumbTwo, title: "Abstract Splash", author: "Rwanda Melflor" },
  { image: Masterfour, thumbnail: UserThumbThree, title: "Modern Face", author: "Melvina Spring" },
  { image: Masterone, thumbnail: UserThumb, title: "Flower Decoration", author: "Melvina Spring" },
  { image: Mastertwo, thumbnail: UserThumbOne, title: "Classic Vase", author: "Rwanda Melflor" },
  { image: Masterthree, thumbnail: UserThumbTwo, title: "Abstract Splash", author: "Rwanda Melflor" },
  { image: Masterfour, thumbnail: UserThumbThree, title: "Modern Face", author: "Melvina Spring" },
];

const Masterpieces = () => {

  const scrollLeft = () => {
    const container = document.getElementById("scroll-container");
    if (container) {
      container.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("scroll-container");
    if (container) {
      container.scrollLeft += 300;
    }
  };

  return (
    <div className="bg-[#D1D9E6]">
      <div className="pt-10 pb-20   p-4">
        <div className="flex justify-between max-sm:gap-0 max-sm:flex-col ">
          <h2 className="text-2xl lg:mb-10 mt-3 mb-3 font-bold">Latest Masterpieces</h2>
          <a
            href="#"
            className="text-blue-600 lg:mb-10 mt-3 mb-3 mr-10 text-md font-semibold flex items-center gap-2"
          >
            Discover More
            <ArrowRight size={22} />
          </a>
        </div>

        <div className="relative bg-[#F1F5F9] p-4 rounded-xl">
          <div
            id="scroll-container"
            className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-4 md:overflow-x-hidden"
          >
            {data.map((item, id) => (
              <div key={id} className="flex-shrink-0 w-72 space-y-4 border-2 border-gray-300 rounded-xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 rounded-xl "
                />
                <div className="px-4 py-2">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-12 h-12 rounded-full  border"
                    />
                    <div>
                      <p className="text-base font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-500 mt-1">{`by ${item.author}`}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 bg-white p-2 rounded-full  hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2  bg-white p-2 rounded-full  hidden md:block"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Masterpieces;
