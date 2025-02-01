"use client";
import React from "react";
import icon1 from "../assets/icon_05.png";
import icon2 from "../assets/icon_06.png";
import icon3 from "../assets/icon_12.png";
import Image from "next/image";

export default function BannerPoint() {
    const cardData = [
        {
            id: 1,
            title: "Master In-Demand Digital Skills to Advance Your Career",
            icon: icon1,
            description:
                "Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today with 300 local partners to stay ahead of the curve!",
        },
        {
            id: 2,
            title: "Earn Vendor Certifications and Join Us",
            icon: icon2,
            description:"Our post-training assessments connect you with leading U.S. certification providers. Join over 3,000 global partners across 21+ countries and begin your career today!"
        
        },    {
            id: 3,
            title: "Start Earning BDT 30,000 Monthly and Grow Your Skills",
            icon: icon3,
            description:
        "Salary-based employment starting at BDT 30,000, with the potential to exceed BDT 3,00,000+ as you up-skill and master new digital skills. Your earning potential is limitless."
        },
    ];
    return (
        <div className="-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 xl:mx-[10%] ">
                {cardData?.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl border-2 shadow-2xl">
                        <div className="mx-auto w-28 h-28 rounded-full border-8 bg-sky-800 border-sky-800  transform -translate-y-1/2">
                            <div className="rounded-full border-2 border-white">
                                <Image
                                    src={item.icon}
                                    width={300}
                                    height={200}
                                    alt={item.title}
                                    className="w-full object-cover p-4"
                                />
                            </div>
                        </div>
                        <div className="">
                        <h2 className="text-center text-xl font-bold text-gray-900">
                            {item.title}
                        </h2>
                        <p className="text-center text-gray-600 leading-relaxed mt-4">
                            {item.description}
                        </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
