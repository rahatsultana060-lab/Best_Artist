import React from 'react';
import { Check } from 'lucide-react';
import Collection from "/src/assets/images/Collection.png";

const SolutionBanner = () => {
  return (
    <div className="overflow-x-hidden bg-gray-900 text-white max-w-full pt-24 pb-12 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full mx-auto max-w-7xl">
        
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Best solutions for your demanding collection
          </h1>
          <p className="text-gray-300 mb-6 text-sm sm:text-base lg:text-lg">
            Odo vulputate case vel lecnia turpis volutpat adipisicing. Sollicitudin at velit, blandit tempus nunc in.
          </p>
          
          <ul className="space-y-3 mb-8 text-sm sm:text-base lg:text-lg">
            <li className="flex items-start">
              <Check className="text-white mr-2 flex-shrink-0" size={20} />
              <span className="text-gray-300">Interdum volutpat turpis malesuada ac turpis.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-white mr-2 flex-shrink-0" size={20} />
              <span className="text-gray-300">Tortor ipsum pretium quis nunc.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-white mr-2 flex-shrink-0" size={20} />
              <span className="text-gray-300">Vitae odio al di purus in.</span>
            </li>
          </ul>
          
          <div className="pt-6">
            <button className="border border-white text-white font-medium py-2 px-6 rounded-md transition duration-300">
              Explore Xinder
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
          <img
            src={Collection}
            alt="Desktop"
            className="absolute w-full sm:max-w-[400px] lg:max-w-[600px] max-h-[350px] lg:max-h-[400px] rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionBanner;


