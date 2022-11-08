
"use client";


import React, { useEffect, useState } from 'react'

// Components
import BrandName from "./components/BrandName"
import NavList from "./components/NavList"


const Header = () => {

    // NavBar

    const [navbar, setNavbar] = useState(false)

    useEffect(() => {
        const navhandler = () => {
            if (window.scrollY >= 10) {
                setNavbar(true)
            } else {
                setNavbar(false)
            }
        }
        window.addEventListener('scroll', navhandler)
    })


    return (
        <>
            <header
                id="Header"
                className={`flex z-[99] fixed w-[100%] opacity-[0.9] ${navbar ? 'bg-[#261C2C] shadow-[_0_0_5px_black] min-h-[80px] nav-trans' : ' bg-[transparent] min-h-[90px] nav-trans'}`}>
                <div className=" flex justify-between max-w-[1200px] 768max:max-w-[600px] px-[2rem] w-[1200px] m-auto items-center">
                    <BrandName />
                    <NavList />
                </div>
            </header>
        </>
    )
}

export default Header