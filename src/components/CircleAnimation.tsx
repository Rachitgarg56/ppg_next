"use client";
import { useEffect, useState } from "react";

interface Props {
    animationColor: string;
}

const CircleAnimation = ({ animationColor }: Props) => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    // Add a slight delay to trigger the transition smoothly
    setTimeout(() => {
    //   setSize(window.innerWidth);
    setSize(2200);
    }, 50);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 overflow-hidden flex items-center justify-center">
      <div
        className={`rounded-full transition-all duration-[1000ms] ease-in-out`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: animationColor,
        }}
      ></div>
    </div>
  );
};

export default CircleAnimation;
