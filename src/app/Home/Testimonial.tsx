"use client"
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import person from "../assets/Ellipse 5.png";
import Image from 'next/image';
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const testimonials = [
  {
    id: 1,
    name: "Asharaful Islam",
    role: "SEO Specialist",
    image: person,
    text: "I was skeptical about learning Website Development and SEO as a beginner, but Buipe Tech made it so easy. The trainers are knowledgeable, and the materials are straightforward.",
  },
  {
    id: 2,
    name: "Asharaful Islam",
    role: "SEO Specialist",
    image: person,
    text: "I was skeptical about learning Website Development and SEO as a beginner, but Buipe Tech made it so easy. The trainers are knowledgeable, and the materials are straightforward.",
  },
];

export default function Testimonial() {


  return (
    <div>
      <section className="py-8 bg-gray-100 text-black">
        <div className="mb-6 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <div className="w-16 h-0.5 bg-red-500 mb-8"></div>
          <div className="flex justify-end">

            <ArrowLeftIcon className="size-6 px-0.5 bg-gray-500 rounded-lg mr-8" />

            <ArrowRightIcon className="size-6 px-0.5 bg-gray-500 rounded-lg" />

          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4 md:px-60 h-auto">
            {testimonials
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="div_testimonials transition-opacity duration-2000 ease-in-out"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full w-12 h-12"
                      width={48}
                      height={48}
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}