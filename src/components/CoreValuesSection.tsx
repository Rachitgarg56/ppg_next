'use client'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CoreValue } from '@/utils/types'
import { coreValues } from '@/utils/util'

const CoreValuesSection = () => {
    const [showCoreValue, setShowCoreValue] = useState(false)
    const [selectedCoreValue, setSelectedCoreValue] = useState<CoreValue>({
        image: '',
        title: '',
        subtitle: '',
        details: '',
    })

    function showDetails(_value: CoreValue){
        setSelectedCoreValue(_value)
        setShowCoreValue(true)
    }

    return (
        <>
            <div className="bg-black py-16 md:py-32">
                <h2 className="text-center text-[#178DA1] text-4xl italic font-semibold font-cambria">Our core values</h2>
                <div className="w-full lg:w-2/3 mx-auto mt-16 md:mt-32">
                    {
                        coreValues.map((value) => {
                            return (
                                <div key={uuidv4()} className="w-full flex items-center mt-8 p-4">
                                    {/* <div className="h-24 md:h-48 w-24 md:w-48 rounded-full bg-gray-100"></div> */}
                                    <div className="bg-gradient-to-r from-gray-700/10 via-gray-700 to-gray-700/10 shadow p-4 md:p-16">
                                        <div className="text-2xl md:text-4xl italic text-white font-cambria">{value.title}</div>
                                        <div className="text-xl font-semibold md:text-3xl text-[#178DA1]">{value.subtitle}</div>
                                        <div className='text-white text-lg md:text-2xl leading-relaxed font-light mt-2 md:mt-4'>{value.details}</div>
                                    </div>
                                    {/* <button className="text-4xl text-white" onClick={()=>showDetails(value)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-9">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
                
            <div className={`fixed top-0 left-0 h-screen w-full bg-black text-white flex flex-col items-start justify-center p-16 md:p-72 z-10 overflow-hidden ${!showCoreValue && 'hidden'}`}>
                <button className="absolute top-16 md:top-48 right-16 md:right-48" onClick={()=>setShowCoreValue(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-8 md:size-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="text-4xl font-semibold font-cambria italic">{selectedCoreValue.title}</div>
                <div className="text-2xl leading-relaxed font-thin tracking-wide mt-8">{selectedCoreValue.details}</div>
            </div>
        </>
    )
}

export default CoreValuesSection