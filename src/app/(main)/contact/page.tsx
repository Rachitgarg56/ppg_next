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
        <div className='bg-gradient-to-r from-[#125F6C] via-[#1C7A8A] via-30% to-[#178DA1] text-white px-4 flex-1 flex flex-col items-center justify-center'>
            <div className="text-center text-5xl font-bold text-white italic font-cambria">Get in touch</div>
            <div className="text-center text-3xl md:text-4xl font-bold italic mt-16 text-gray-900 font-cambria">(123) 456 7890</div>
            <div className="text-center mt-8 font-cambria font-bold">
                <Link href={`mailto:hello@ActivatePPG.com`} className="text-center text-2xl sm:text-3xl md:text-4xl font-bold border-b border-gray-900 italic mt-16 text-gray-900">hello@ActivatePPG.com</Link>
            </div>
        </div>
    )
}

export default page