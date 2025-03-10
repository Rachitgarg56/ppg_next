'use client'

import React, { useState } from 'react'

const sideHeros = [
    {path: "/assets/images/sidehero/side_hero1.png", text: "The first sundowner", },
    {path: "/assets/images/sidehero/side_hero2.png", text: "The second sundowner", },
    {path: "/assets/images/sidehero/side_hero3.png", text: "The third sundowner", },
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
        <div className="p-16 md:p-32 flex flex-col items-center md:items-end justify-end bg-cover" style={{'backgroundImage': `url(${selectedSideHero.path})`}}>
            <div className="w-64 md:w-96 h-64 md:h-96 rounded-full bg-black text-[#178DA1] text-3xl md:text-5xl italic flex items-center justify-center text-center p-4">
                <button className="" onClick={prevSideHero}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <div className="font-cambria font-bold italic">{selectedSideHero.text}</div>
                <button className="" onClick={nextSideHero}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SideHero