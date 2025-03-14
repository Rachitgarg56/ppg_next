'use client'

import { Metadata } from 'next';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface CoreValue {
    image: string;
    title: string;
    subtitle: string;
    details: string;
}

const teamMembers = [
    {name: "Kourtney Houston", designation: "Owner", blurb: "Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit consequunt", image: "", },
    {name: "Shale Houston", designation: "Owner", blurb: "Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit consequunt", image: "", },
]

const coreValues = [
    {image: "", title: "Partnership", subtitle: "We are here for you", details: "We are here for you, lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?"},
    {image: "", title: "Consistency", subtitle: "We are at it, always", details: "We are at it, lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?"},
    {image: "", title: "Reliability", subtitle: "We got your back", details: "We got your back, lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?"},
    {image: "", title: "Innovation", subtitle: "We lead with creativity", details: "We lead with creativity, lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?"},
    {image: "", title: "Adaptability", subtitle: "We evolve to meet your needs", details: "We evolve to meet your needs, lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?"},
]

// export const generateMetadata = (): Metadata => {
//   return {
//     title: "My App",
//     description: "This is a Next.js app",
//     openGraph: {
//       images: [
//         {
//           url: "",
//           alt: "Preview image for My App",
//         },
//       ],
//       title: "My App",
//       description: "This is a Next.js app",
//       type: "website",
//     },
//   };
// };


const page = () => {
    const [showCoreValue, setShowCoreValue] = useState(false)
    const [selectedCoreValue, setSelectedCoreValue] = useState<CoreValue>({
        image: '',
        title: '',
        subtitle: '',
        details: '',
    })

    function showDetails(_value: CoreValue){
        setSelectedCoreValue(_value)
        setShowCoreValue(true)
    }

    return (
        <div className='bg-[#178DA1] text-white pt-8'>
            <div className="text-center text-5xl font-bold text-white italic font-cambria">About Us</div>
            <div className="text-2xl md:text-3xl font-thin mt-16 w-full lg:w-2/3 mx-auto text-center px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?</div>
            <div className="w-full lg:w-2/3 mx-auto mt-16 px-4">
                {
                    teamMembers.map((member) => {
                        return (
                            <div key={uuidv4()} className="grid grid-cols-1 md:grid-cols-2 md:gap-4 justify-items-center items-center mb-16">
                                <div className="w-64 md:w-80 h-64 md:h-80 bg-gray-100 rounded-full"></div>
                                <div className="leading-relaxed mt-8 md:mt-0">
                                    <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold italic font-cambria">{member.name}</h2>
                                    <h3 className="text-center md:text-left text-xl md:text-2xl font-thin italic">{member.designation}</h3>
                                    <p className="text-xl text-center md:text-left md:text-2xl mt-8 font-thin">{member.blurb}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="bg-black py-16 md:py-32">
                <h2 className="text-center text-[#178DA1] text-4xl italic font-semibold font-cambria">Our core values</h2>
                <div className="w-full lg:w-2/3 mx-auto mt-16 md:mt-32">
                    {
                        coreValues.map((value) => {
                            return (
                                <div key={uuidv4()} className="w-full flex items-center mt-8 h-24 md:h-48 p-4">
                                    <div className="h-24 md:h-48 w-24 md:w-48 rounded-full bg-gray-100"></div>
                                    <div className="bg-gradient-to-r from-gray-700/10 via-gray-700 to-gray-700/10 shadow flex-1 p-4 md:p-16 h-24 md:h-48">
                                        <div className="text-xl md:text-4xl italic text-white font-cambria">{value.title}</div>
                                        <div className="text-xl font-semibold md:text-4xl text-[#178DA1]">{value.subtitle}</div>
                                    </div>
                                    <button className="text-4xl text-white" onClick={()=>showDetails(value)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-9">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
            <div className={`fixed top-0 left-0 h-screen w-full bg-black text-white flex flex-col items-start justify-center p-16 md:p-72 z-10 overflow-hidden ${!showCoreValue && 'hidden'}`}>
                <button className="absolute top-16 md:top-48 right-16 md:right-48" onClick={()=>setShowCoreValue(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-8 md:size-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="text-4xl font-semibold font-cambria italic">{selectedCoreValue.title}</div>
                <div className="text-2xl leading-relaxed font-light mt-8">{selectedCoreValue.details}</div>
            </div>
        </div>
    )
}

export default page