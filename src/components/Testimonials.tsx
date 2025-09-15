'use client'

import React, { useState } from 'react'

const testimonials = [
  {name: "Brooke Bergeron", company: "Boston Beer Company", designation: "District Manager", text: "I’ve had the pleasure of working with Prestige Promotions for several years for events from small to large, and I can’t recommend them highly enough. Their team has proven to be incredibly reliable and trustworthy. They consistently show up on time, and always have a deep knowledge of our products. Prestige has become a valuable partner to Boston Beer Co.", },
  {name: "Jeff Bee", company: "Constellation Brands", designation: "National Account Manager", text: "I have had the pleasure of working with Prestige Promotions for the past 10  plus years, and I cannot speak highly enough of their exceptional service and dedication. They have consistently gone above and beyond in conducting hand-selling events at Walmart locations for my business. Their team is professional, enthusiastic, and highly skilled at engaging customers and driving sales. I am incredibly grateful for the partnership we have built over the years. Prestige Promotions has been a key factor in our success, and I look forward to continuing our collaboration for many more years to come. If you are looking for a reliable and effective promotional partner, I highly recommend Prestige Promotions. Thank you, Prestige Promotions, for your outstanding work and unwavering commitment to excellence!", },
  {name: "Tina Boyer", company: "SGWS", designation: "Account Executive", text: "Kourtney, You, as always sent an all-star for today's golf tournament. She just got the vibe and made sure everyone had fun. Five-star review. Thank you, Kourtney, for making my life easier when it comes to samplings and events. I know when I book events with your company, I can be assured a professional, prepared, representative will be there.", },
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  function prevTestimonial() {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  function nextTestimonial() {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="bg-gradient-to-r from-[#125F6C] via-[#1C7A8A] via-30% to-[#178DA1] text-white text-center sm:py-12 overflow-hidden">
      <div className="relative w-full lg:w-2/3 mx-auto flex items-center justify-between p-4">
        
        {/* Prev button */}
        <button className='cursor-pointer z-10' onClick={prevTestimonial}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>

        {/* Slider */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 flex flex-col justify-center px-4 sm:px-8 md:px-40 leading-relaxed">
                <div className="text-xl md:text-2xl font-thin">{i+1 + ". " + t.text}</div>
                <div className="mt-8 md:mt-16 italic text-2xl md:text-3xl font-semibold">{t.name}</div>
                <div className="mt-2 italic text-xl md:text-2xl font-thin">
                  {t.designation}, {t.company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button className='cursor-pointer z-10' onClick={nextTestimonial}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Testimonials
