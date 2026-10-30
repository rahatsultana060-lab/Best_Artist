import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video7 from "../assets/videos/video7.mp4";
import video8 from "../assets/videos/video8.mp4";

const videoData = [
  {
    id: 1,
    src: video3,
    name: "Marie Poirot",
    role: "Co-Founder",
    company: "Art-Gal",
    quote: "Their creativity and dedication brought my vision to life beyond expectations. “Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”",
  },
  {
    id: 2,
    src: video4,
    name: "Emma Laurent",
    role: "Creative Lead",
    company: "Visionary Studio",
    quote: "A team that truly understands art and design with pure professionalism.  “Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”",
  },
  {
    id: 3,
    src: video5,
    name: "Sophie Dubois",
    role: "Designer",
    company: "InnoArts",
    quote: "Innovative, aesthetic, and always on time — love working with them!  “Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”",
  },
  {
    id: 4,
    src: video8,
    name: "Clara Lefevre",
    role: "Founder",
    company: "StudioNova",
    quote: "From concept to execution, their work was just flawless and inspiring.  “Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”",
  },
  {
    id: 5,
    src: video6,
    name: "Léa Martin",
    role: "Art Director",
    company: "DesignCrate",
    quote: "Truly a masterpiece in every frame they delivered. Highly recommended!  “Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”",
  },
  {
    id: 6,
    src: video7,
    name: "Camille Rousseau",
    role: "Co-Founder",
    company: "BrightIdeas",
    quote: "Their storytelling through video is powerful and emotionally engaging.  “Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? videoData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === videoData.length - 1 ? 0 : prev + 1));
  };

  const currentVideo = videoData[current];

  return (
    <div className=" w-full py-10 px-6 bg-white flex flex-col md:flex-row items-center justify-between gap-10 md:gap-18 relative">
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-100 rounded-full  md:left-0 md:transform-none"
      >
        <ChevronLeft size={24} className="text-gray-700" />
      </button>

      <div className="w-full md:w-[45%] h-[320px] rounded-xl overflow-hidden shadow-md mb-6 md:mb-0">
        <video
          src={currentVideo.src}
          controls
          className="w-full h-full "
        />
      </div>

      <div className="w-full md:w-[50%] h-[320px] flex flex-col justify-center text-[#0f172a] mb-6 md:mb-0 md:mt-0">
        <p className="text-xl font-bold mb-3">
          {currentVideo.name},{" "}
          <span className="text-gray-600 font-medium">{currentVideo.role}</span>{" "}
          <span className="text-blue-600 font-semibold">@{currentVideo.company}</span>
        </p>
        <p className=" mr-10 text-gray-700 text-justify">
          “{currentVideo.quote}”
        </p>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-100 rounded-full  md:right-0 md:transform-none"
      >
        <ChevronRight size={24} className="text-gray-700" />
      </button>
    </div>
  );
};

export default Slider;
