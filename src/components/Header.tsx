'use client'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { socials } from '@/utils/util';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
    {text: "Work", url: "/work", },
    {text: "Capabilities", url: "/capabilities", },
    {text: "Careers", url: "/careers", },
    {text: "About us", url: "/about-us", },
    {text: "Contact", url: "/contact", },
];

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    const paths = ['/careers', '/about-us', '/contact']

    return (
        <div className={`w-full p-8 max-sm:pb-0 md:pt-24 md:pb-16 md:px-24 ${paths.includes(pathname) ? 'bg-[#178DA1]' : 'bg-black'} text-white ${showMenu && 'h-screen'}`}>
            {/* Header  */}
            <div className="h-32 flex items-start justify-between">
                <Link href="/" className="w-24 md:w-32 h-24 md:h-32">
                    <img src="/assets/images/ppg-logo.svg" alt=""/>
                </Link>
                <button className="w-16 h-16 cursor-pointer" onClick={(() => setShowMenu(true))}>
                    <img src="/assets/images/menu-icon.svg" alt=""/>
                </button>
            </div>
            {/* Menu */}
            <div className={`fixed overflow-hidden top-0 left-0 w-full h-screen bg-[#178DA1] p-10 sm:p-8 md:p-12 lg:px-40 lg:pt-32 z-20 ${!showMenu && 'hidden'}`}>
                <button onClick={(() => setShowMenu(false))} className="cursor-pointer w-4 h-4 sm:w-12 md:w-24 sm:h-12 md:h-24 text-white absolute top-10 sm:top-8 md:top-8 lg:top-24 right-12 lg:right-40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 sm:size-12 md:size-16 lg:size-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col space-y-4 sm:space-y-8 sm:ml-8  font-cambria">
                    {
                        menuItems.map((menuItem) => {
                            return <Link onClick={()=>setShowMenu(false)} key={uuidv4()} href={menuItem.url} className="text-xl sm:text-3xl md:text-5xl italic font-semibold tracking-wide text-white hover:text-gray-100">{menuItem.text}</Link>
                        })
                    }
                </div>
                <div className="text-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between sm:ml-8 mt-16 sm:mt-24">
                    <div className="text-lg md:text-2xl">
                        <div className="font-bold tracking-wide max-sm:text-sm">Prestige Promotions Group LLC</div>
                        <div className="font-light tracking-wider max-sm:text-sm mt-2">St Louis, Missouri, United States</div>
                    </div>
                    <div className="flex mt-4 md:mt-0">
                        {
                            socials.map((social) => {
                                return (
                                    <Link key={uuidv4()} href={social.url} target="_blank" className="w-8 h-8 sm:w-12 sm:h-12 drop-shadow-lg mr-4 md:ml-4">
                                        <img src={`/assets/images/${social.icon}`} alt=""/>
                                    </Link>        
                                )
                            })
                        }
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Header
