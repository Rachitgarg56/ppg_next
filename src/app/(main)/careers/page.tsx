import { Metadata } from 'next';
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const testimonials = [
    {image: '/assets/images/careers/career1.avif', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?", name: "John Doe", title: "BA 1", },
    {image: '/assets/images/careers/career2.avif', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?", name: "Jane Doe", title: "BA 2", },
    {image: '/assets/images/careers/career3.avif', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa in? Aliquid illum neque dicta, corporis accusantium molestiae eaque, sint necessitatibus quas, deserunt aperiam impedit odio itaque eligendi?", name: "John Smith", title: "BA 3", },
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
    <div className='bg-[#178DA1] text-white py-8'>
        <div className="text-center text-5xl font-bold text-white italic font-cambria">Careers</div>
        <div className="mt-8 text-2xl sm:text-3xl tracking-wide font-thin leading-relaxed px-8 mx-auto text-center sm:w-2/3 pb-4 md:pb-16">
            Are you excited by the prospect of working in the events space? Do you like fast and enjoyable work environments where everybody works together to pull off events in real time? Come work with us to get real-world experience in the marketing and promotions industry and build skills that are transferable to any industry.
            <br /><br />
            We’re always on the lookout for young and energetic team members. Because this is an event-based organization, you would work limited hours and make money on the side while having plenty of time to pursue another career or passion.
        </div>
        <div className="flex flex-wrap mx-auto justify-center gap-4 items-center bg-[#178DA1]">

        {testimonials.map((testimonial) => (
          <div key={uuidv4()} className="flex items-center justify-center">
            <div className="h-48 w-48 rounded-full bg-white overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                width={192}
                height={192}
                className="object-cover h-full w-full rounded-full"
              />
            </div>
          </div>
        ))}

        </div>
    </div>
  )
}

export default page