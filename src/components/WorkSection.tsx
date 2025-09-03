'use client'
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Work } from "@/utils/types";
import { works } from '@/utils/util'
import Link from "next/link";

interface PageProps {
    data: Work | undefined;
}

const WorkSection = ( { data }: PageProps ) => {
    const [work, setWork] = useState(data);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {works.map((work) => {
                    return (
                        <Link key={uuidv4()} href={`/work/${work?.slug}`}>
                            <div
                            className="relative bg-cover bg-no-repeat h-96 bg-center bg-blend-overlay bg-black/50 cursor-pointer hover:bg-black/70"
                            style={{ backgroundImage: `url(${work.image})` }}
                            >
                                <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-semibold text-white text-center leading-normal font-cambria md:tracking-wide italic">
                                    {work.title}
                                </h2>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Selected Work */}
            {/* {
                work &&
                <div
                    className={`z-10 absolute inset-0 w-full min-h-screen bg-cover bg-no-repeat h-96 bg-center bg-blend-overlay bg-black/50`}
                    style={{ backgroundImage: `url(${work?.image})` }}
                >
                    <Link href={'/work'}>        
                        <button
                        onClick={()=>setWork(undefined)}
                        className="w-24 h-24 text-white absolute top-4 md:top-24 right-4 md:right-24 z-10"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="size-20"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                        </button>
                    </Link>
                    <div className="h-screen p-8 md:p-24 w-full">
                        <h1 className="text-3xl md:text-6xl text-white text-center leading-relaxed md:pr-32 drop-shadow-lg font-cambria tracking-wide italic">
                            {work?.title}
                        </h1>
                    </div>
                    <div className="bg-cyan-50 px-8 md:px-64 py-8 md:py-32">
                        <div className="text-[#178DA1] text-3xl text-center font-thin leading-relaxed mb-32">
                            {work?.subtitle}
                        </div>
                        {work?.elements?.map((workElement) => {
                            return (
                            <div
                                key={uuidv4()}
                                className="text-gray-700 mb-16 w-full md:w-3/4"
                            >
                                <h2 className="text-3xl font-semibold">{workElement.title}</h2>
                                <p className="my-4 text-2xl font-light">
                                {workElement.subtitle}
                                </p>
                                <div className="mt-4 space-y-2 text-2xl font-light">
                                {workElement.bullets?.map((bullet) => {
                                    return (
                                    <div key={uuidv4()} className="">
                                        <span className="">-</span>
                                        <span className="border-b mb-1 border-gray-700 ml-8">
                                        {bullet.title}
                                        </span>
                                        <span className="">{" : " + bullet.details}</span>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
            } */}
        </>
    )
}

export default WorkSection