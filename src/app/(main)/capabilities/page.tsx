import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const capabilities = [
    {title: "Event Planning"},
    {title: "Event Management"},
    {title: "Interactive Experiences"},
    {title: "Product Sampling"},
    {title: "Technology Integration"},
    {title: "Analysis"},
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
    <div className='bg-black text-white pb-16'>
        <div className="text-center text-5xl font-bold text-white italic font-cambria">Capabilities</div>
        <div className="w-full md:w-2/3 text-xl md:text-3xl text-center leading-relaxed font-light mt-16 mx-auto">We specialize in crafting events that place your products in front of your ideal consumer. Whether you’re looking for a dedicated special celebration or are interested in collecting primary customer feedback, we’ll work with you to activate your brand.</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 place-content-center mt-16 md:mt-32 mx-auto w-3/4">
            {
                capabilities.map((capability) => {
                    return (
                        <div key={uuidv4()} className="h-72 w-72 p-4 bg-white rounded-full flex items-center justify-center text-4xl font-bold italic text-cyan-700 text-center">{capability.title}</div>   
                    )
                })
            }
        </div>
        <div className="mt-16 md:mt-32 mx-auto md:w-1/2 text-2xl md:text-4xl text-center font-thin tracking-wide">Connect with us to know how we could collaborate to bubble up your brand</div>
        <div className="text-center mt-16 md:mt-24">
            <Link href="/careers" className="w-full md:w-max bg-cyan-600 italic text-black text-xl md:text-3xl px-8 md:px-32 py-4 md:py-8">work with us</Link>
        </div>
    </div>
  )
}

export default page