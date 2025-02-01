import React from "react";

const communityData = {
  heading: "Our community",
  description:
    "Bulipe Tech aims to train unemployed individuals in Bangladesh, equipping them with essential digital skills and linking them to job opportunities across 23 countries worldwide.",
  stats: [
    { value: "3K+", label: "Global partners worldwide" },
    { value: "23+", label: "Countries and adding" },
    { value: "300+", label: "Local training partners" },
  ],
};

export default function Community() {
  return (
    <div>
      <section className="py-16 lg:mt-10 lg:mb-10 bg-black text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-[8%] text-start">
          <div className="items-start">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              {communityData.heading}
            </h2>
            <div className="w-20 h-0.5 bg-red-500 rounded-full mt-2 mb-4"></div>
            <p className="text-gray-400 max-w-2xl mb-12 text-start">
              {communityData.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {communityData.stats.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg shadow-sky-600"
              >
                <h3 className="text-4xl font-bold text-white">
                  {item.value}
                </h3>
                <p className="text-gray-400 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
