import React from 'react';
import Person from '../assets/images/person.png';

const JoinNow = () => {
  return (
    <section className="bg-[#0F172A] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
            Add more masterpieces<br />to your growing collection
          </h2>
          <button className="mt-4 px-6 py-3 border border-white text-white rounded hover:bg-white ">
            Join Now
          </button>
        </div>
        <div className="w-full md:w-auto">
          <img
            src={Person}
            alt="Smiling man"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
