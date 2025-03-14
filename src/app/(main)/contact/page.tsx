'use client'
import { Metadata } from 'next';
import Link from 'next/link';
import React, { useRef } from 'react'

// export const generateMetadata = (): Metadata => {
//     return {
//       title: "My App",
//       description: "This is a Next.js app",
//       openGraph: {
//         images: [
//           {
//             url: "",
//             alt: "Preview image for My App",
//           },
//         ],
//         title: "My App",
//         description: "This is a Next.js app",
//         type: "website",
//       },
//     };
//   };
  

const page = () => {
    const email = useRef('hello@ActivatePPG.com');
    const phone = useRef('(123) 456 7890');

    return (
        <div className='bg-[#178DA1] text-white h-[400px] py-16 px-4'>
            <div className="text-center text-5xl font-bold text-white italic font-cambria">Get in touch</div>
            <div className="text-center text-3xl md:text-4xl font-bold italic mt-16 text-gray-900 font-cambria">{phone.current}</div>
            <div className="text-center mt-8 font-cambria font-bold">
                <Link href={`mailto:${email.current}`} className="text-center text-2xl sm:text-3xl md:text-4xl font-bold border-b border-gray-900 italic mt-16 text-gray-900">{email.current}</Link>
            </div>
        </div>
    )
}

export default page