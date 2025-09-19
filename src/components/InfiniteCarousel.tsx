'use client'
import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

interface PageProps {
  data: { image: string; text: string; name: string; title: string }[];
}

const InfiniteCarousel = ({ data }: PageProps) => {
  const duplicatedData = [...data, ...data];
  const [finalData] = useState(duplicatedData);
  const [cardWidth, setCardWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth > 768 ? 42.5 : 75;
    }
    return 42.5;
  });
  const [translateX, setTranslateX] = useState(0);

  const [isPaused, setIsPaused] = useState(false); // pause state
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Resize listener for card width
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth > 768) {
        setCardWidth(42.5);
      } else {
        setCardWidth(75);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Autoplay effect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setTranslateX((prev) => prev - cardWidth);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cardWidth, isPaused]);

  // Reset when halfway scrolled
  useEffect(() => {
    if (
      Math.abs(translateX + cardWidth) ===
      (finalData.length * cardWidth) / 2
    ) {
      setTranslateX(0);
    }
  }, [translateX, cardWidth, finalData.length]);

  // --- Handlers ---
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  };

  const goNext = () => {
    setIsPaused(true);
    setTranslateX((prev) => prev - cardWidth);
  };

  const goPrev = () => {
    setIsPaused(true);
    setTranslateX((prev) => {
      if (prev === 0) {
        // jump to second half when at start
        return -((finalData.length * cardWidth) / 2 - cardWidth);
      }
      return prev + cardWidth;
    });
  };

  return (
    <div
      className="outer-container w-screen overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`inner-container flex h-full ${
          translateX !== 0 ? "transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(${translateX}vw)` }}
      >
        {finalData.map((data, idx) => (
          <div
            key={uuidv4()}
            className={`carousel-card shrink-0 text-center 
                       max-lg:mx-auto flex max-lg:flex-col items-center 
                       gap-6 px-4 lg:px-10 py-8 lg:py-28 ${
                         idx % 2 === 0 ? "bg-[#1C7A8A]" : "bg-[#125F6C]"
                       }`}
            style={{ width: `${cardWidth}vw` }}
          >
            <figure className="relative w-[70%] lg:w-[40%] aspect-square self-center rounded-full">
              <img src={data.image} alt={data.title} />
              <span className="absolute text-white font-bold left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-cambria text-lg lg:text-2xl whitespace-nowrap">{data.title}</span>
            </figure>
            <p className="lg:w-[60%] lg:text-left font-thin text-xl opacity-80 max-sm:line-clamp-4">
              {data.text}
            </p>
          </div>
        ))}
      </div>

      {/* Arrows for manual control */}
      <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
};

export default InfiniteCarousel;
