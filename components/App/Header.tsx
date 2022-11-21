import React, { useEffect, useState } from 'react'

// Components
import BrandName from "./components/BrandName"
import NavList from "./components/NavList"
import Announcement from '../Others/Announcement'


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
                className={`flex flex-col bg-[#3e2c41] z-[99] fixed w-[100%] min-h-[80px] ${navbar ? 'shadow-[_0_0_0.75px_whitesmoke]' : ''}`}>
                <Announcement />
                <div className="flex py-[25px] justify-between max-w-[1200px] px-[2rem] w-[100%] m-auto items-center">
                    <BrandName />
                    <NavList />
                </div>
            </header>
        </>
    )
}

export default Header