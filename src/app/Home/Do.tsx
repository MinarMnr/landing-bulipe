"use client";

import React from "react";
import Image from "next/image";
import Electric from "../assets/electric.png";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";


export default function Do() {
  return (
    <div>
      <section className="py-10 px-4 md:px-10 lg:px-[10%] items-center text-black">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          What We Do?
        </h2>
        <div className="w-16 h-0.5 bg-red-500 mx-auto mb-8"></div>

        <div className="flex flex-col lg:flex-row items-center">

          <div className="p-6 md:p-10 rounded-l-xl lg:w-1/2  justify-end items-end">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Bulipe Tech is a dynamic and innovative company
            </h3>
            <p className="mb-8">
              We empower individuals to unlock career opportunities through our proven Digital Skill Development program. Partnering with 300 local organisations and 3,000+ global partners in 21 countries, we provide access to top U.S. certifications and salary-based employment starting at $250, with the potential to exceed $3,000 through continuous up-skilling.
            </p>
            <button className="bg-[#004464] px-6 py-1 text-white border-2 ml-4 font-bold inline-flex gap-2 rounded-full" >
              <Link href="#">Read More</Link>
              <ArrowRightIcon className="size-5" />
            </button>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/2">
            <Image
              src={Electric}
              alt={"Can DO"}
              width={800}
              height={800}
              className="rounded-r-lg object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
