"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HovsSectionProps {
  images: string[];
  heading: React.ReactNode;
  paragraph: React.ReactNode;
  linkText: React.ReactNode;
  linkHref: string;
}


const HovsSection: React.FC<HovsSectionProps> = ({
  images,
  heading,
  paragraph,
  linkText,
  linkHref,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePaginationClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="text-white py-16 ml-[2%]">
      <div className="container flex flex-col">
        {/* Display the active image */}
        <div className="relative w-[91%] h-[630px]">
          <Image
            src={images[activeIndex]}
            alt={`Slide ${activeIndex + 1}`}
            width={1200}
            height={800}
            className="object-contain w-full h-full bg-neutral-900/50 rounded-lg"
            priority
          />
        </div>

        {/* Dynamic carousel pagination lines */}
        <div className="flex items-center mt-4 space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-1 cursor-pointer ${activeIndex === index ? 'bg-white' : 'bg-gray-600'
                }`}
              onClick={() => handlePaginationClick(index)}
            />
          ))}
        </div>

        {/* Text block (heading, paragraph, link) below the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
          <h2 className="text-3xl mb-4 max-w-sm">
            {heading}
          </h2>
          <div>
            <p className="text-gray-400 text-lg mb-5 leading-relaxed max-w-[85%]">
              {paragraph}
            </p>
            <Link
              href={linkHref}
              aria-label="View Project Details"
              className="cursor-pointer text-white text-lg"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HovsSection;