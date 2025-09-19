'use client'

import React, { useState } from 'react'

const sideHeros = [
    {id: 1, path: "/assets/images/sidehero/side_hero1.png", text: "Celebrate your brand", video: "/assets/mp4/home-video1.mp4"},
    {id: 2, path: "/assets/images/sidehero/side_hero2.png", text: "Hear from patrons", video: "/assets/mp4/home-video2.mp4"},
    {id: 3, path: "/assets/images/sidehero/side_hero3.png", text: "Raise a toast", video: "/assets/mp4/home-video3.mp4"},
];

const SideHero = () => {
    const [selectedSideHero, setSelectedSideHero] = useState(sideHeros[0]);

    function prevSideHero(){
        if(selectedSideHero == sideHeros[0]){
            setSelectedSideHero(sideHeros[sideHeros.length - 1])
        } else {
            setSelectedSideHero(sideHeros[sideHeros.indexOf(selectedSideHero) - 1])
        }
    }
    
    function nextSideHero(){
        if(selectedSideHero == sideHeros[sideHeros.length - 1]){
            setSelectedSideHero(sideHeros[0])
        } else {
            setSelectedSideHero(sideHeros[sideHeros.indexOf(selectedSideHero) + 1])
        }
    }
        
    return (
        <div
        className={`relative w-full`}
        // make wrapper presentational; video is decorative in many hero use-cases
        aria-hidden="true"
        >
            {
                sideHeros.map((hero) => (
                
                <video
                key={hero.id}
                src={hero.video}
                autoPlay
                muted
                playsInline
                loop={true}
                preload={'auto'}
                // no controls attribute -> user won't see play/pause UI
                className={`${!(hero.id === selectedSideHero.id) ? 'hidden' : 'block'} w-full h-auto object-contain`}
                />
            ))
            }

            <div className="absolute w-1/2 aspect-square max-md:left-1/2 max-md:-translate-x-1/2 max-md:bottom-0 max-md:translate-y-1/2 md:w-96 md:h-96 md:right-28 md:top-1/2 md:-translate-y-1/2 rounded-full bg-black text-[#178DA1] max-sm:leading-tight text-xl md:text-5xl italic flex items-center justify-center text-center p-2 sm:p-4">
                <button className="cursor-pointer" onClick={prevSideHero}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <div className="font-cambria font-bold italic">{selectedSideHero.text}</div>
                <button className="cursor-pointer" onClick={nextSideHero}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SideHero
