'use client'

import React, { useState } from 'react'

const testimonials = [
    {name: "Linda Smith", company: "Some Company 1", designation: "Some designation 1", text: "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad maxime tempora totam tempore incidunt distinctio doloribus cumque repellat molestias quos tenetur, quisquam, fugit corporis rem sequi. Molestias, sapiente quae.", },
    {name: "Laura Potts", company: "Some Company 2", designation: "Some designation 2", text: "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad maxime tempora totam tempore incidunt distinctio doloribus cumque repellat molestias quos tenetur, quisquam, fugit corporis rem sequi. Molestias, sapiente quae.", },
    {name: "James Camer", company: "Some Company 3", designation: "Some designation 3", text: "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad maxime tempora totam tempore incidunt distinctio doloribus cumque repellat molestias quos tenetur, quisquam, fugit corporis rem sequi. Molestias, sapiente quae.", },
    {name: "Franz Kafka", company: "Some Company 4", designation: "Some designation 4", text: "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad maxime tempora totam tempore incidunt distinctio doloribus cumque repellat molestias quos tenetur, quisquam, fugit corporis rem sequi. Molestias, sapiente quae.", },
]

const Testimonials = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0])

    function prevTestimonial(){
        if(selectedTestimonial == testimonials[0]){
            setSelectedTestimonial(testimonials[testimonials.length - 1])
        } else {
            setSelectedTestimonial(testimonials[testimonials.indexOf(selectedTestimonial) - 1])
        }
    }
    
    function nextTestimonial(){
        if(selectedTestimonial == testimonials[testimonials.length - 1]){
            setSelectedTestimonial(testimonials[0])
        } else {
            setSelectedTestimonial(testimonials[testimonials.indexOf(selectedTestimonial) + 1])
        }
    }

    return (
        <div className="bg-[#178DA1] text-white text-center py-12 sm:py-24 md:py-48">
            <div className="w-full md:w-2/3 mx-auto flex items-center justify-between p-4">
                <button onClick={prevTestimonial}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <div className="px-4 sm:px-8 md:px-40 leading-relaxed">
                    <div className="text-xl md:text-2xl font-thin">{selectedTestimonial.text}</div>
                    <div className="mt-8 md:mt-16 italic text-2xl md:text-3xl font-semibold">{selectedTestimonial.name}</div>
                    <div className="mt-2 italic text-xl md:text-2xl font-thin">{selectedTestimonial.designation + ', ' + selectedTestimonial.company}</div>
                </div>
                <button onClick={nextTestimonial}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Testimonials
