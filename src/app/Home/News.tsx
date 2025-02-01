"use client";
import Image from "next/image";

import latest from "../assets/latest.png";
import other from "../assets/other.png"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const otherData = [
  {
    id: 1,
    title:
      "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    category: "Technology",
    image: latest,
  },
  {
    id: 2,
    title:
      "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    category: "Technology",
    image: other,
  },
  {
    id: 3,
    title:
      "Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    category: "Technology",
    image: other,
  },

];

export default function News() {


  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 mt-5 lg:mt-10 mb-4 md:mb-10 text-black">
        {/* Latest News Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          <div className="w-16 h-0.5 bg-red-500 mb-8"></div>
          <div className="flex flex-col md:flex-row">
            <Image
              src={otherData[0].image}
              alt="Latest News"
              className="w-full md:w-1/2 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              height={200}
              width={200}
            />
            <div className="mt-4 md:mt-0 md:ml-4">
              <span className="text-sm text-gray-500 uppercase">
                {otherData[0].category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{otherData[0].title}</h3>
              <p className="text-gray-600 mb-4">{otherData[0].description}</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Featured News</h2>
          <div className="flex justify-end">
        
              <ArrowLeftIcon className="size-6 px-0.5 bg-gray-500 rounded-lg mr-8"/>
         
              <ArrowRightIcon className="size-6 px-0.5 bg-gray-500 rounded-lg"/>
             
            </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherData.map((news) => (
                <div key={news.id}>
                  <Image
                    src={news.image}
                    alt={news.title}
                    className="w-full rounded-lg mb-4"
                    height={200}
                    width={200}
                  />
                  <span className="text-sm text-gray-500 uppercase">
                    {news.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.description}</p>
                  <button className="bg-white text-[#004464] border-2 border-[#004464] px-4 py-2 rounded-lg inline-flex">
                    Read More
                    <ArrowRightIcon className="size-4 ml-5"></ArrowRightIcon>
                  </button>
                </div>
              ))}
            </div>
          
         
          </div>
        </div>
      </div>
    </div>
  );
}
