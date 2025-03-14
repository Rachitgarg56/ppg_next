import CoreValuesSection from '@/components/CoreValuesSection';
import { Metadata } from 'next';
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const teamMembers = [
    {name: "Kourtney Houston", designation: "Owner", blurb: "Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit consequunt", image: "", },
    {name: "Shale Houston", designation: "Owner", blurb: "Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit consequunt", image: "", },
]

export const generateMetadata = (): Metadata => {
  return {
    title: "My App",
    description: "This is a Next.js app",
    openGraph: {
      images: [
        {
          url: "",
          alt: "Preview image for My App",
        },
      ],
      title: "My App",
      description: "This is a Next.js app",
      type: "website",
    },
  };
};

const page = () => {
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
            <CoreValuesSection/>
        </div>
    )
}

export default page