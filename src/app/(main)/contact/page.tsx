import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

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
        <div className='bg-gradient-to-r from-[#125F6C] via-[#1C7A8A] via-30% to-[#178DA1] text-white px-4 flex-1 flex flex-col gap-8 items-center max-sm:pt-16 sm:justify-center'>
            <div className="text-center text-5xl font-bold text-white italic font-cambria">Get in touch</div>
            <div className="text-center text-3xl md:text-4xl font-bold italic text-gray-900 font-cambria">(123) 456 7890</div>
            <div className="text-center font-cambria font-bold sm:mb-20">
                <Link href={`mailto:hello@ActivatePPG.com`} className="text-center text-2xl sm:text-3xl md:text-4xl font-bold border-b border-gray-900 italic text-gray-900">hello@ActivatePPG.com</Link>
            </div>
        </div>
    )
}

export default page