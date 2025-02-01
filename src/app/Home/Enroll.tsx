"use client";

import Image from "next/image";
import React from "react";
import program1 from "../assets/rect.png";
import program2 from "../assets/rect1.png";

const sectionData = {
  heading: "Our Programs",
 buttons: [
    { text: "Digital Skills Development", isActive: true },
    { text: "Skill Development", isActive: false },
    { text: "All", isActive: false },
  ],
};

const data = [
 
  {
    id: 1,
    title: "IT Suppourt Specialist",
    rating: 4,
    price: "300 BDT",
    image: program1,
  },
  {
    id: 3,
    title: "Software Engineer",
    rating: 5,
    price: "500 BDT",
    image: program2,
  },


];

export default function Enroll() {

  return (
    <div>
      <div className="text-center py-8 text-black">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {sectionData.heading}
          </h2>
          <div className="w-16 h-0.5 bg-red-500 mx-auto mt-2"></div>
        </div>
        <div className="flex justify-center space-x-8 mt-2">
          {sectionData.buttons.map((button, index) => (
            <button
              key={index}
              className={`text-sm font-medium text-gray-600 ${
                button.isActive
                  ? "border-b-2 border-blue-500"
                  : "hover:border-b-2 hover:border-gray-400"
              }`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 text-black">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-xl shadow-xl overflow-hidden "
          >
            <Image
              src={item.image}
              width={300}
              height={200}
              alt={item.title}
              className="w-full object-cover p-4"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold ">
                {item.title}
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {"★".repeat(Math.floor(item.rating))}{" "}
                  {/* Render stars dynamically */}
                </div>
             
              </div>
              <div className="text-lg font-bold ">
                {item.price}
              </div>
              <div className="flex items-center justify-between mt-2">
                <button className="text-blue-500 font-medium hover:underline">
                  Read Details
                </button>
                <button
                  className="border-2  px-4 py-2 rounded-full"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
