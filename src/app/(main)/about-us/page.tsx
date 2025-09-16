import CoreValuesSection from '@/components/CoreValuesSection';
import { Metadata } from 'next';
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const teamMembers = [
    {name: "Kourtney Houston", designation: "Owner", blurb: "After a career as a cosmetologist, Kourtney was ready to go on the greatest adventure of her life when she founded PPG in 2011. A master of staffing and problem solving, she loves the exciting space of events and interactive marketing. Outside of work, Kourtney enjoys cooking for friends and family.", image: "", },
    {name: "Shale Houston", designation: "Owner", blurb: "Shale joined PPG during the pandemic, bringing 20+ years of sales and business experience and a willingness to take charge. He enjoys working in this industry precisely because there’s a different challenge every day. When not working, Shale enjoys hosting friends and family and boating.", image: "", },
    {name: "Carrie Schoening", designation: "Manager", blurb: "Almost nothing happens here without Carrie’s effort and involvement. Carrie is the backend and calendar manager at PPG and has been a central member since 2014. Outside of work, Carrie is busy with her children and rescue animals, including the Irish wolfhounds she raises.", image: "", },
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
        <div className='bg-gradient-to-r from-[#125F6C] via-[#1C7A8A] via-30% to-[#178DA1] text-white pt-4'>
            <div className="text-center text-5xl font-bold text-white italic font-cambria">About Us</div>
            <div className="text-2xl md:text-3xl font-thin mt-12 w-full lg:w-2/3 mx-auto text-center px-4 leading-relaxed tracking-wide">Prestige Promotions Group was founded in 2011 with a desire to raise the standards of interactive marketing and go directly to the customer. Since then, the company has continued to grow its portfolio, working in 6 states with over 40 brands. PPG is unique because it considers itself an extension of its partner brands and distributors, which means it takes a personal stake on each promotion project.</div>
            <div className="w-full lg:w-2/3 mx-auto px-4 flex flex-col gap-24 md:gap-28 my-24 md:my-32">
                {
                    teamMembers.map((member) => {
                        return (
                            <div key={uuidv4()} className="grid grid-cols-1 md:grid-cols-2 md:gap-4 justify-items-center items-center">
                                <div className="w-64 md:w-80 h-64 md:h-80 bg-gray-100 rounded-full"></div>
                                <div className="leading-relaxed mt-8 md:mt-0">
                                    <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold italic font-cambria">{member.name}</h2>
                                    <h3 className="text-center md:text-left text-xl md:text-2xl font-thin italic mt-1">{member.designation}</h3>
                                    <p className="text-xl text-center md:text-left md:text-2xl mt-4 md:mt-8 font-thin">{member.blurb}</p>
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