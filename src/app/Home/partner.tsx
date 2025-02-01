import React from "react";
import Image from "next/image";
import ibm from "../assets/IBM_logo.png";
import Hostinger from "../assets/Hostinger-logo.png";
import digitalOcean from "../assets/DigitalOcean-logo.png";
import Microsoft from "../assets/microsoft-logo.webp";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const partnerSectionData = {
  buttons: [
    { text: "Technology Partners", isActive: true },
    { text: "Branding Partners", isActive: false },
    { text: "Training Partners", isActive: false },
    { text: "Banking Partners", isActive: false },
  ],
  partners: [
    { src: ibm, alt: "IBM" },
    { src: Hostinger, alt: "H" },
    { src: digitalOcean, alt: "D" },
    { src: Microsoft, alt: "M" },
  ],
};

export default function Partner() {
  return (
    <div>
      <section className="py-8 text-black">
      <div className="mb-6 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold">Our Partners</h2>
          <div className="w-16 h-0.5 bg-red-500 mb-8"></div>
          <div className="flex justify-end">

            <ArrowLeftIcon className="size-6 px-0.5 bg-gray-500 rounded-lg mr-8" />

            <ArrowRightIcon className="size-6 px-0.5 bg-gray-500 rounded-lg" />

          </div>
        </div>
        <div className="flex justify-center space-x-4 text-sm font-medium mb-4">
          {partnerSectionData.buttons.map((button, index) => (
            <button
              key={index}
              className={`${index === 0 ? "text-cyan-600": "text-slate-500"}`}
            >
              {button.text}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-2 md:px-16">
          {partnerSectionData.partners.map((partner, index) => (
            <div key={index} className="bg-[#ccfbf1] flex justify-center p-1.5 rounded-xl">
              <Image
                src={partner.src}
              
                height={100}
                alt={partner.alt}
                className="h-8"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
