'use client'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface WorkElementBullet {
    title?: string;
    details?: string; 
}

interface WorkElement {
    title?: string;
    subtitle?: string; 
    bullets?: WorkElementBullet[]; 
}

interface Work {
    title?: string;
    subtitle?: string;
    image?: string;
    elements?: WorkElement[];
}
  

const works = [
    {
        title: "Sunset Bliss Fest", 
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores beatae vitae placeat nesciunt quaerat deleniti laboriosam consequuntur maxime quod cupiditate expedita amet vel porro labore, totam repellat voluptas quos similique!", 
        image: "https://plus.unsplash.com/premium_photo-1723300354426-e8c90954f6d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", elements: [
        {title: "Objectives, Planning & Execution", subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores beatae vitae placeat nesciunt quaerat deleniti", bullets: [
            {title: "Enhance Brand Image", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
            {title: "Engage Customers", details: ""},
            {title: "Increase Brand Loyalty", details: ""},
            {title: "Boost Sales", details: ""},
        ]},
        {title: "Key Components", bullets: [
            {title: "Venue & Setup", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
            {title: "Entertainment & Activities", details: ""},
            {title: "Increase Brand Loyalty", details: ""},
            {title: "Boost Sales", details: ""},
        ]},
        {title: "Conclusion", subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores beatae vitae placeat nesciunt quaerat deleniti"}
    ] },
    {title: "Beer Pong", image: "https://images.unsplash.com/photo-1568667185695-edcbcd4938cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
    {title: "", image: "https://images.unsplash.com/photo-1723743809921-07781a7c6535?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
    {title: "", image: "https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
    {title: "", image: "https://images.unsplash.com/photo-1723766700475-3f8f1d3c0c1a?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
    {title: "", image: "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
    {title: "", image: "https://plus.unsplash.com/premium_photo-1723924941212-b03a8db60215?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
    {title: "", image: "https://images.unsplash.com/photo-1723934603827-e5a2dd061ba2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
]

const page = () => {
    const [selectedWork, setSelectedWork] = useState<Work>({})
    const [showSelectedWork, setShowSelectedWork] = useState<boolean>(false)

    function showWorkDetails(work: Work){
        setSelectedWork(work)
        setShowSelectedWork(true)
    } 

    return (
        <div className='bg-black'>
            <div className="text-center text-5xl font-bold text-white italic font-cambria pb-16">Work</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    works.map((work) => {
                        return (
                            <div key={uuidv4()} onClick={()=>showWorkDetails(work)} className="relative bg-cover bg-no-repeat h-96 bg-center bg-blend-overlay bg-black/50 cursor-pointer hover:bg-black/70" style={{'backgroundImage': `url(${work.image})`}}>
                                <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-semibold text-white text-center leading-normal font-cambria md:tracking-wide italic">{work.title}</h2>
                            </div>
                        )
                    })
                }
            </div>

            {/* Selected Work */}
            <div className={`z-10 absolute inset-0 w-full min-h-screen bg-cover bg-no-repeat h-96 bg-center bg-blend-overlay bg-black/50 ${!showSelectedWork && 'hidden'}`} style={{'backgroundImage': `url(${selectedWork.image})`}}>
                <button onClick={()=>setShowSelectedWork(false)} className="w-24 h-24 text-white absolute top-4 md:top-24 right-4 md:right-24 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="h-screen p-8 md:p-24 w-full">
                    <h1 className="text-3xl md:text-6xl text-white text-center leading-relaxed md:pr-32 drop-shadow-lg font-cambria tracking-wide italic">{selectedWork.title}</h1>
                </div>
                <div className="bg-cyan-50 px-8 md:px-64 py-8 md:py-32">
                    <div className="text-[#178DA1] text-3xl text-center font-thin leading-relaxed mb-32">{selectedWork.subtitle}</div>
                    {
                        selectedWork.elements?.map((workElement) => {
                            return (
                                <div key={uuidv4()} className="text-gray-700 mb-16 w-full md:w-3/4">
                                    <h2 className="text-3xl font-semibold">{workElement.title}</h2>
                                    <p className="my-4 text-2xl font-light">{workElement.subtitle}</p>
                                    <div className="mt-4 space-y-2 text-2xl font-light">
                                        {
                                            workElement.bullets?.map((bullet) => {
                                                return (
                                                    <div key={uuidv4()} className="">
                                                        <span className="">-</span>
                                                        <span className="border-b mb-1 border-gray-700 ml-8">{bullet.title}</span>
                                                        <span className="">{' : ' + bullet.details}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default page