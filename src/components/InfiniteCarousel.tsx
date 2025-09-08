'use client'
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

interface PageProps {
  data: { image: string; text: string; name: string; title: string }[];
}

const InfiniteCarousel = ({ data }: PageProps) => {
  const duplicatedData = [...data, ...data];
  const [finalData] = useState(duplicatedData);

  const cardWidth = 42.5; // vw
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    // kick off movement after mount
    const interval = setInterval(() => {
        setTranslateX(prev => prev - cardWidth); // shift left one card
    }, 3000); // every 3s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (Math.abs(translateX + cardWidth) == ((finalData.length * cardWidth) / 2)) {
        setTranslateX(0);
    }
  },[translateX])

  return (
    <div className="outer-container w-screen overflow-hidden">
      <div
        className={`inner-container flex h-full ${translateX !== 0 ? 'transition-transform duration-1000 ease-in-out' : ''}`}
        style={{ transform: `translateX(${translateX}vw)` }}
      >
        {finalData.map((data,idx) => (
          <div
            key={uuidv4()}
            className={`carousel-card shrink-0 text-center 
                       max-lg:mx-auto flex max-lg:flex-col items-center 
                       gap-6 px-4 lg:px-10 py-8 lg:py-28 ${(idx % 2 === 0) ? 'bg-[#1C7A8A]' : 'bg-[#125F6C]'}`}
            style={{ width: `${cardWidth}vw` }}
          >
            <div className="w-[70%] lg:w-[40%] aspect-square self-center bg-white rounded-full"></div>
            <p className="lg:w-[60%] lg:text-left lg:text-xl opacity-80 max-sm:line-clamp-4">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
