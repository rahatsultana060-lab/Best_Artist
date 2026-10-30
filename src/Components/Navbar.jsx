import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Hero from "/src/assets/images/Hero.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-[#8A1538]">
      <nav className="bg-[#8A1538] text-white px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center  w-full ">
        <div className="text-2xl font-bold">xinder</div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4 font-medium">
            <a href="#" className="hover:underline">Explore</a>
            <a href="#" className="hover:underline">Solutions</a>
            <a href="#" className="hover:underline">Articles</a>
            <a href="#" className="hover:underline">Sign In</a>
          </div>
          <button className="bg-white text-[#8A1538] px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
            Join Now
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#8A1538] text-white  flex flex-col items-center gap-4 md:hidden">
            <a href="#" className="hover:underline">Explore</a>
            <a href="#" className="hover:underline">Solutions</a>
            <a href="#" className="hover:underline">Articles</a>
            <a href="#" className="hover:underline">Sign In</a>
            <button className="bg-white text-[#8A1538] px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
              Join Now
            </button>
          </div>
        )}
      </nav>

      
      <section className="bg-[#8A1538] text-white px-6 sm:px-12 py-20 pt-30">

        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-5xl sm:text-5xl font-bold leading-tight mb-6">
              Search the work of <br /> the best artists
            </h1>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
              <input
                type="text"
                placeholder="Search for artists, work name, or category"
                className="flex-1 px-4 py-3 rounded-md text-black bg-white "
              />
              <button className="bg-[#c53f61] px-6 h-[48px] rounded-md text-white font-semibold hover:bg-[#a63451]">
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Oil Painting", "Abstract Art", "Sculpture", "Art Deco", "Pop Art"].map((tag, i) => (
                <span
                  key={i}
                  className="bg-white text-[#8A1538] px-3 py-1 text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 flex  md:justify-end">
            <img
              src={Hero}
              alt=""
              className="w-full max-w-sm rounded-lg "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
