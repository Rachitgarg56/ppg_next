'use client'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { heroImages } from '@/utils/util'

const HeroSection = () => {
    const [bubblesSize, setBubblesSize] = useState(() => 0);
    
    function getBubbleSize() {
        if (typeof window === "undefined") return 1.3
         
        const windowWidth = window.innerWidth
        let size = 4;
        if (windowWidth >= 1024) {
            size = 4
        } else if (windowWidth < 1024 && windowWidth >= 880) {
            size = 3.5
        } else if (windowWidth < 880 && windowWidth > 768) {
            size = 3
        } else if (windowWidth <= 768 && windowWidth >= 640) {
            size = 2.5
        } else if (windowWidth < 640 && windowWidth >= 500) {
            size = 2
        } else if (windowWidth < 500 && windowWidth >= 400) {
            size = 1.5
        } else if (windowWidth < 400 && windowWidth >= 360) {
            size = 1.3
        } else if (windowWidth < 360) {
            size = 1.2
        }
        return size
    }
   
    useEffect(() => {
        function handleResizeOrLoad() {
            const size = getBubbleSize()
            setBubblesSize(size)
        }

        handleResizeOrLoad()
    
        window.addEventListener('resize', handleResizeOrLoad)

        return () => {
            window.removeEventListener('resize', handleResizeOrLoad)
        }
    },[getBubbleSize])
    
    return (
    <div className='bg-black pb-32 px-4'>
        <div className="w-full max-w-5xl mx-auto aspect-square relative top-[-20px] sm:top-[-150px] xl:top-[-220px]">
        {
            heroImages.map((heroImage) => {
                return (
                    <div
                        key={uuidv4()}
                        className={`border-4 border-gray-600 rounded-full bg-cover absolute`}
                        style={{
                        height: `${heroImage.size*bubblesSize}px`,
                        width: `${heroImage.size*bubblesSize}px`,
                        top: `${heroImage.top}%`,
                        left: `${heroImage.left}%`,
                        backgroundImage: `url(${heroImage.path})`,
                        }}
                    ></div>
                )
            })
        }
        </div>
        
        {/* Quote */}
        <div className="text-center mx-auto w-full md:w-2/3 leading-relaxed p-8">
        <div className="font-thin text-gray-100 text-2xl md:text-3xl leading-relaxed md:leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis sunt velit explicabo modi rem voluptatibus accusamus consectetur! Numquam quisquam velit neque quos porro molestias quaerat molestiae iusto cum? Ullam!</div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-24">
            <Link href="#" className="border border-gray-100 text-center py-6 text-2xl md:text-3xl text-[#178DA1] italic tracking-wider font-cambria font-semibold w-full hover:bg-[#E1E3E1]">capabilities</Link>
            <Link href="#" className="border border-gray-100 text-center py-6 text-2xl md:text-3xl text-[#178DA1] italic tracking-wider font-cambria font-semibold mt-8 md:mt-0 md:ml-16 w-full hover:bg-[#E1E3E1]">work with us</Link>
        </div>
        </div>
    </div>
    )
}

export default HeroSection
