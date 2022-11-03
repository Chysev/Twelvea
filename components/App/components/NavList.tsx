import Link from "next/link"
import React, { useState } from 'react'


const NavList = () => {

    const [open, setOpen] = useState(false)


    return (
        <>

            <button
                onClick={() => setOpen(!open)}
                name={open ? "close" : "menu"}
                className="Button  z-[9999] hidden transition-all 768max:block">

                {/* NavIcon */}
                <i className={`z-[999] text-white fa-solid fa-bars-staggered transition-all 
                ${open ? "768max:rotate-0" : "768max:rotate-180"}`}></i>

            </button>


            <nav className={`NavRowList 768max:fixed ${open ? "768max:translate-x-0" : "768max:translate-x-full"}`}>

                <ul className="flex items-center gap-[2.8rem] 768max:fixed 768max:my-auto 
                768max:mx-[5rem] 768max:flex-col 768max:items-center 768max:p-[min(20vh,_10rem)_2em]">

                    <li className=" hover:text-[#5C527F] text-[#6E85B2] font-[700] cursor-pointer">
                        <Link href="/">
                            <p className="text-[16px] nav-font">
                                Home
                            </p>
                        </Link>
                    </li>


                    <li className=" hover:text-[#5C527F] text-[#6E85B2] font-[700] cursor-pointer">
                        <Link href="/about">
                            <p className="text-[16px] nav-font">
                                About
                            </p>
                        </Link>
                    </li>


                    <li className=" hover:text-[#5C527F] text-[#6E85B2] font-[700] cursor-pointer">
                        <Link href="/tropa">
                            <p className="text-[16px] nav-font">
                                Tropa
                            </p>
                        </Link>
                    </li>

                    <li className=" hover:text-[#5C527F] text-[#6E85B2] font-[700] cursor-pointer">
                        <Link href="/memories">
                            <p className="text-[16px] nav-font">
                                Memories
                            </p>
                        </Link>
                    </li>

                    <li className=" hover:text-[#5C527F] text-[#6E85B2] font-[700] cursor-pointer">
                        <Link href="/devnote">
                            <p className="text-[16px] nav-font">
                                DevNote
                            </p>
                        </Link>
                    </li>


                </ul>
            </nav>
        </>
    )
}

export default NavList