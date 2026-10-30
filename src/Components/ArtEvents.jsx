import React from 'react';
import WildHorse from "../assets/images/WildHorse.png";
import Colors from "../assets/images/Colors.png";
import FatherDay from "../assets/images/FatherDay.png";
import {  ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: 'Wild Horse Event',
    description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    image: WildHorse,
    tag: 'Featured',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    id: 2,
    title: 'Great Colors',
    description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    image: Colors,
    tag: 'New',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    id: 3,
    title: 'Happy Father’s Day',
    description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
    image: FatherDay,
    tag: 'Coming Soon',
    tagColor: 'bg-yellow-100 text-yellow-700',
  },
];

const ArtEvents = () => {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
  <h2 className="text-2xl font-bold">Art events</h2>
  
  <a href="#" className=" font-semibold flex items-center text-sm text-blue-600 mr-10">
    Explore All Events <span className="ml-1"><ArrowRight  size={18}/></span>
  </a>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map(event => (
          <div
            key={event.id}
            className="bg-white rounded-lg  w-full max-w-sm mx-auto"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 sm:h-56 md:h-48 "
              />
              <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded ${event.tagColor}`}>
                {event.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtEvents;
